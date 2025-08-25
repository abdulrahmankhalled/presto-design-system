import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-radiobutton',
  standalone: true,
  imports: [CommonModule, FormsModule, RadioButtonModule],
  template: `
    <div class="inline-flex items-center gap-2">
      <p-radioButton
        [inputId]="inputId"
        [name]="name"
        [value]="value"
        [ngModel]="model"
        (onClick)="onSelect(value)"
        [styleClass]="radioClasses"
      ></p-radioButton>
      <label *ngIf="label" class="text-sm text-gray-800" [for]="inputId">{{
        label
      }}</label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiRadioButtonComponent<T = unknown> {
  @Input() name = 'group';
  @Input() label?: string;
  @Input() value!: T;
  @Input() model!: T;
  @Output() modelChange = new EventEmitter<T>();
  @Input() inputId = 'radio-' + Math.random().toString(36).slice(2, 7);

  get radioClasses(): string {
    return ['text-blue', 'focus:ring-blue'].join(' ');
  }

  onSelect(val: T): void {
    this.modelChange.emit(val);
  }
}
