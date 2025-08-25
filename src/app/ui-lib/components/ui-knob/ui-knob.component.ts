import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'ui-knob',
  standalone: true,
  imports: [CommonModule, FormsModule, KnobModule],
  template: `
    <p-knob [(ngModel)]="value" [min]="min" [max]="max" [step]="step"></p-knob>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiKnobComponent {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
}
