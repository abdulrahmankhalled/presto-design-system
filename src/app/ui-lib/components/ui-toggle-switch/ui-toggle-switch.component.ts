import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-toggle-switch',
  standalone: true,
  imports: [CommonModule, FormsModule, InputSwitchModule],
  template: `
    <p-inputSwitch
      [ngModel]="checked"
      (onChange)="checkedChange.emit($event.checked)"
      [styleClass]="classes"
    ></p-inputSwitch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToggleSwitchComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  get classes(): string {
    return ['text-blue', 'focus:ring-blue'].join(' ');
  }
}
