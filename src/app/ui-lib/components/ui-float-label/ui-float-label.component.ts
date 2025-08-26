import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-float-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="p-float-label block w-full">
      <ng-content />
      <label *ngIf="label" class="text-sm text-gray-600">{{ label }}</label>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFloatLabelComponent {
  @Input() label = '';
}
