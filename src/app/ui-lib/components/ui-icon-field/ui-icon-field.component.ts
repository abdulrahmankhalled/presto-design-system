import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type IconPosition = 'left' | 'right';

@Component({
  selector: 'ui-icon-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [ngClass]="containerClasses">
      <i *ngIf="icon" [ngClass]="icon" class="text-gray-500"></i>
      <ng-content />
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconFieldComponent {
  @Input() icon?: string; // e.g., 'pi pi-search'
  @Input() position: IconPosition = 'left';

  get containerClasses(): string[] {
    return [
      'p-input-icon-' + this.position,
      'inline-flex',
      'items-center',
      'w-full',
    ];
  }
}
