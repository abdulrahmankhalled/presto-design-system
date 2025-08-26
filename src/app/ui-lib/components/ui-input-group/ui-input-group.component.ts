import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-input-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex items-stretch w-full border border-blue rounded-md overflow-hidden"
    >
      <ng-content />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputGroupComponent {}
