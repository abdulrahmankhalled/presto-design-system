import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule],
  template: `
    <p-checkbox
      [binary]="true"
      [inputId]="inputId"
      [disabled]="disabled"
      [ngModel]="checked"
      (onChange)="onChange($event.checked)"
      [styleClass]="boxClasses"
    ></p-checkbox>
    <label *ngIf="label" class="ml-2 text-sm text-gray-800" [for]="inputId">{{
      label
    }}</label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCheckboxComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Input() label?: string;
  @Input() inputId = 'checkbox-' + Math.random().toString(36).slice(2, 7);
  @Output() checkedChange = new EventEmitter<boolean>();

  get boxClasses(): string {
    return [
      'rounded-brand-sm',
      'border',
      'border-blue',
      'text-blue',
      'focus:ring-2',
      'focus:ring-blue',
    ].join(' ');
  }

  onChange(value: boolean): void {
    this.checkedChange.emit(value);
  }
}
