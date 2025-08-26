import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'ui-select-button',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButtonModule],
  template: `
    <p-selectButton
      [options]="options"
      [(ngModel)]="model"
      [multiple]="multiple"
      [disabled]="disabled"
      [ariaLabel]="ariaLabel"
      [unselectable]="unselectable"
      [styleClass]="classes"
    ></p-selectButton>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSelectButtonComponent<T = unknown> {
  @Input() options: { label: string; value: T }[] = [];
  @Input() model!: T | T[];
  @Output() modelChange = new EventEmitter<T | T[]>();
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() ariaLabel?: string;
  @Input() unselectable = false;

  get classes(): string {
    return [
      'rounded-brand-md',
      'border',
      'border-blue',
      'focus:ring-2',
      'focus:ring-blue',
    ].join(' ');
  }
}
