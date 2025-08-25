import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-input-number',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumberModule],
  template: `
    <p-inputNumber
      [(ngModel)]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [mode]="mode"
      [suffix]="suffix"
      [prefix]="prefix"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [inputStyleClass]="inputClasses"
    ></p-inputNumber>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputNumberComponent {
  @Input() value: number | null = null;
  @Output() valueChange = new EventEmitter<number | null>();
  @Input() min?: number;
  @Input() max?: number;
  @Input() step = 1;
  @Input() mode: 'decimal' | 'currency' = 'decimal';
  @Input() suffix?: string;
  @Input() prefix?: string;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() size: UiSize = 'md';

  get inputClasses(): string {
    const base = [
      'w-full',
      'rounded-md',
      'border',
      'border-blue',
      'focus:ring-2',
      'focus:ring-blue',
    ];
    const sizes: Record<UiSize, string[]> = {
      sm: ['h-8', 'text-sm'],
      md: ['h-10', 'text-sm'],
      lg: ['h-12', 'text-base'],
    };
    return [...base, ...sizes[this.size]].join(' ');
  }
}
