import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePickerModule],
  template: `
    <p-datepicker
      [(ngModel)]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [showIcon]="showIcon"
      [styleClass]="inputClasses"
      [dateFormat]="dateFormat"
    ></p-datepicker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDatePickerComponent {
  @Input() value: Date | null = null;
  @Output() valueChange = new EventEmitter<Date | null>();
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() showIcon = true;
  @Input() dateFormat = 'mm/dd/yy';
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
