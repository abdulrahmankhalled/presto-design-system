import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

type UiInputTextSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-input-text',
  standalone: true,
  imports: [CommonModule, InputTextModule, KeyFilterModule],
  template: `
    <input
      pInputText
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [pKeyFilter]="keyFilterPattern ? keyFilterPattern : null"
      [ngClass]="computedClasses"
      [value]="value"
      (input)="onInput($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputTextComponent {
  @Input() size: UiInputTextSize = 'md';
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'search' = 'text';
  @Input() value: string | null = null;
  @Input() keyFilterPattern?: string | RegExp;
  @Output() valueChange = new EventEmitter<string>();

  get computedClasses(): string[] {
    const base = [
      'w-full',
      'rounded-brand-md',
      'border',
      'border-blue',
      'text-neutral-900',
      'placeholder-neutral-400',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue',
      'focus:border-transparent',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    ];

    const sizeClasses: Record<UiInputTextSize, string[]> = {
      sm: ['h-8', 'px-3', 'text-sm'],
      md: ['h-10', 'px-3', 'text-sm'],
      lg: ['h-12', 'px-4', 'text-base'],
    };

    return [...base, ...sizeClasses[this.size]];
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
