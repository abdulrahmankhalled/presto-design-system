import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'ui-speed-dial',
  standalone: true,
  imports: [CommonModule, SpeedDialModule],
  template: `
    <p-speedDial
      [model]="items"
      [direction]="direction"
      [transitionDelay]="50"
    ></p-speedDial>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSpeedDialComponent {
  @Input() items: any[] = [];
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';
}
