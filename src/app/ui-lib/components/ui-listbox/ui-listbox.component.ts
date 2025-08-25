import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'ui-listbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ListboxModule],
  template: `
    <p-listbox
      [options]="options"
      [(ngModel)]="model"
      [multiple]="multiple"
      [styleClass]="classes"
    ></p-listbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiListboxComponent<T = unknown> {
  @Input() options: any[] = [];
  @Input() model!: T | T[];
  @Output() modelChange = new EventEmitter<T | T[]>();
  @Input() multiple = false;

  get classes(): string {
    return [
      'w-80',
      'rounded-md',
      'border',
      'border-blue',
      'focus:ring-2',
      'focus:ring-blue',
    ].join(' ');
  }
}
