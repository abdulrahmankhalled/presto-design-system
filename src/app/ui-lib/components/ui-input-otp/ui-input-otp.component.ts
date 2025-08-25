import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-input-otp',
  standalone: true,
  imports: [CommonModule, FormsModule, InputOtpModule],
  template: `
    <p-inputOtp
      [(ngModel)]="value"
      [length]="length"
      [disabled]="disabled"
      [styleClass]="inputClasses"
    ></p-inputOtp>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputOtpComponent {
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null>();
  @Input() length = 6;
  @Input() disabled = false;
  @Input() size: UiSize = 'md';

  get inputClasses(): string {
    const base = [
      'rounded-md',
      'border',
      'border-blue',
      'focus:ring-2',
      'focus:ring-blue',
    ];
    const sizes: Record<UiSize, string[]> = {
      sm: ['h-8', 'w-8', 'text-sm'],
      md: ['h-10', 'w-10', 'text-sm'],
      lg: ['h-12', 'w-12', 'text-base'],
    };
    return [...base, ...sizes[this.size]].join(' ');
  }
}
