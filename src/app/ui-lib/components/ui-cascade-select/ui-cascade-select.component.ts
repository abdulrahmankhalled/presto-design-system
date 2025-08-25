import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';

type UiSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-cascade-select',
  standalone: true,
  imports: [CommonModule, FormsModule, CascadeSelectModule],
  template: `
    <p-cascadeselect
      [options]="options"
      [disabled]="disabled"
      [placeholder]="placeholder"
      [ngClass]="selectClasses"
      [(ngModel)]="model"
      (onChange)="modelChange.emit(model)"
    ></p-cascadeselect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCascadeSelectComponent<T = unknown> {
  @Input() options: any[] = [];
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() size: UiSize = 'md';
  @Input() model: T | null = null;
  @Output() modelChange = new EventEmitter<T | null>();

  get selectClasses(): string[] {
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
    return [...base, ...sizes[this.size]];
  }
}
