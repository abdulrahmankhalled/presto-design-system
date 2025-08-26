import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

export interface UiDropdownOption<T = unknown> {
  label: string;
  value: T;
}

type UiDropdownSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  template: `
    <p-dropdown
      [options]="options"
      [disabled]="disabled"
      [ngClass]="wrapperClasses"
      [styleClass]="dropdownClasses"
      [placeholder]="placeholder"
      [showClear]="clearable"
      [filter]="filter"
      [filterPlaceholder]="filterPlaceholder"
      [(ngModel)]="model"
      (onChange)="onChange($event.value)"
    ></p-dropdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDropdownComponent<T = unknown> {
  @Input() options: UiDropdownOption<T>[] = [];
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() clearable = false;
  @Input() filter = false;
  @Input() filterPlaceholder = 'Search...';
  @Input() size: UiDropdownSize = 'md';
  @Input() model: T | null = null;
  @Output() modelChange = new EventEmitter<T | null>();

  get wrapperClasses(): string[] {
    return ['w-full'];
  }

  get dropdownClasses(): string {
    const base = [
      'w-full',
      'rounded-brand-md',
      'border',
      'border-blue',
      'text-neutral-900',
      'focus:ring-2',
      'focus:ring-blue',
      'focus:outline-none',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    ];

    const sizeClasses: Record<UiDropdownSize, string[]> = {
      sm: ['h-8', 'text-sm'],
      md: ['h-10', 'text-sm'],
      lg: ['h-12', 'text-base'],
    };
    return [...base, ...sizeClasses[this.size]].join(' ');
  }

  onChange(value: T | null): void {
    this.modelChange.emit(value);
  }
}
