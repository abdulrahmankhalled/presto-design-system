import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'ui-slider',
  standalone: true,
  imports: [CommonModule, FormsModule, SliderModule],
  template: `
    <div class="w-80">
      <p-slider
        [(ngModel)]="value"
        [min]="min"
        [max]="max"
        [step]="step"
        [style]="{ width: '100%' }"
      ></p-slider>
      <div class="mt-2 text-sm text-gray-700">{{ value }}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSliderComponent {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
}
