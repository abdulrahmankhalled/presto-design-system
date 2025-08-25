import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'ui-split-button',
  standalone: true,
  imports: [CommonModule, SplitButtonModule],
  template: `
    <p-splitButton
      [label]="label"
      [model]="items"
      [class]="buttonClasses"
    ></p-splitButton>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSplitButtonComponent {
  @Input() label = 'Actions';
  @Input() items: any[] = [];

  get buttonClasses(): string {
    return ['bg-blue', 'text-white', 'hover:bg-blue-dark', 'rounded-md'].join(
      ' '
    );
  }
}
