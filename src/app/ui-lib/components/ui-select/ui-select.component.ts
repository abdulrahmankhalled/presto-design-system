import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule],
  template: `
    <p-select
      [options]="options"
      [(ngModel)]="model"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [styleClass]="selectClasses"
    ></p-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSelectComponent<T = unknown> {
  @Input() options: any[] = [];
  @Input() model: T | null = null;
  @Output() modelChange = new EventEmitter<T | null>();
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() size: UiSize = 'md';

  get selectClasses(): string {
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
