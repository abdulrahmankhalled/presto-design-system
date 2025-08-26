import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-autocomplete',
  standalone: true,
  imports: [CommonModule, FormsModule, AutoCompleteModule],
  template: `
    <p-autocomplete
      [suggestions]="suggestions"
      (completeMethod)="completeMethod && completeMethod($event)"
      [placeholder]="placeholder"
      [dropdown]="dropdown"
      [forceSelection]="forceSelection"
      [disabled]="disabled"
      [(ngModel)]="model"
      [styleClass]="inputClasses"
    ></p-autocomplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAutoCompleteComponent<T = unknown> {
  @Input() suggestions: T[] = [];
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() dropdown = false;
  @Input() forceSelection = false;
  @Input() size: UiSize = 'md';
  @Input() model: T | null = null;
  @Output() modelChange = new EventEmitter<T | null>();
  @Input() completeMethod?: (event: { query: string }) => void;

  get inputClasses(): string {
    const base = [
      'w-full',
      'rounded-md',
      'border',
      'border-blue',
      'focus:ring-2',
      'focus:ring-blue',
      'focus:outline-none',
    ];
    const sizes: Record<UiSize, string[]> = {
      sm: ['h-8', 'text-sm'],
      md: ['h-10', 'text-sm'],
      lg: ['h-12', 'text-base'],
    };
    return [...base, ...sizes[this.size]].join(' ');
  }
}
