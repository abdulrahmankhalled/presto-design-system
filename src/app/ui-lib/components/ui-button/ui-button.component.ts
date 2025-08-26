import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

type UiButtonVariant = 'primary' | 'secondary' | 'ghost' | 'success' | 'danger';
type UiButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <button
      pButton
      type="button"
      [disabled]="disabled"
      [ngClass]="computedClasses"
      (click)="onClick()"
    >
      <ng-content />
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
  @Input() variant: UiButtonVariant = 'primary';
  @Input() size: UiButtonSize = 'md';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();

  get computedClasses(): string[] {
    const base = [
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-brand-md',
      'font-medium',
      'transition-colors',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
    ];

    const sizeClasses: Record<UiButtonSize, string[]> = {
      sm: ['h-8', 'px-3', 'text-sm'],
      md: ['h-10', 'px-4', 'text-sm'],
      lg: ['h-12', 'px-6', 'text-base'],
    };

    const variantClasses: Record<UiButtonVariant, string[]> = {
      primary: [
        'bg-blue',
        'text-white',
        'hover:bg-blue-dark',
        'focus:ring-blue',
      ],
      secondary: [
        'bg-white',
        'text-blue',
        'border',
        'border-blue',
        'hover:bg-blue/10',
        'focus:ring-blue',
      ],
      ghost: [
        'bg-transparent',
        'text-blue',
        'hover:bg-blue/10',
        'focus:ring-blue',
      ],
      success: [
        'bg-green-primary',
        'text-white',
        'hover:bg-green-light',
        'focus:ring-green-primary',
      ],
      danger: [
        'bg-red-600',
        'text-white',
        'hover:bg-red-700',
        'focus:ring-red-600',
      ],
    };

    const disabledClasses = this.disabled
      ? ['opacity-50', 'cursor-not-allowed', 'hover:none']
      : [];

    return [
      ...base,
      ...sizeClasses[this.size],
      ...variantClasses[this.variant],
      ...disabledClasses,
    ];
  }

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
