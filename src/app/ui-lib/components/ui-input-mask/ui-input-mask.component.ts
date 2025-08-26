import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-input-mask',
  standalone: true,
  imports: [CommonModule, FormsModule, InputMaskModule],
  template: `
    <p-inputMask
      [mask]="mask"
      [(ngModel)]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [styleClass]="inputClasses"
    ></p-inputMask>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputMaskComponent {
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null>();
  @Input() mask = '';
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
