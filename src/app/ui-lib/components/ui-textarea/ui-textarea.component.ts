import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Textarea } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, Textarea],
  template: `
    <textarea
      pInputTextarea
      [rows]="rows"
      [cols]="cols"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [ngClass]="classes"
      [value]="value"
      (input)="onInput($event)"
    ></textarea>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextareaComponent {
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null>();
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() rows = 4;
  @Input() cols = 30;
  @Input() size: UiSize = 'md';

  get classes(): string[] {
    const base = [
      'w-full',
      'rounded-brand-md',
      'border',
      'border-blue',
      'focus:ring-2',
      'focus:ring-blue',
    ];
    const sizes: Record<UiSize, string[]> = {
      sm: ['text-sm', 'p-sm'],
      md: ['text-sm', 'p-md'],
      lg: ['text-base', 'p-lg'],
    };
    return [...base, ...sizes[this.size]];
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.valueChange.emit(target.value);
  }
}
