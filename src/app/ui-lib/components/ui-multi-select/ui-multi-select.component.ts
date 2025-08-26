import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'ui-multi-select',
  standalone: true,
  imports: [CommonModule, FormsModule, MultiSelectModule],
  template: `
    <p-multiSelect
      [options]="options"
      [(ngModel)]="model"
      [placeholder]="placeholder"
      [styleClass]="classes"
    ></p-multiSelect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMultiSelectComponent<T = unknown> {
  @Input() options: any[] = [];
  @Input() model: T[] = [];
  @Output() modelChange = new EventEmitter<T[]>();
  @Input() placeholder = '';

  get classes(): string {
    return [
      'w-full',
      'rounded-md',
      'border',
      'border-blue',
      'focus:ring-2',
      'focus:ring-blue',
    ].join(' ');
  }
}
