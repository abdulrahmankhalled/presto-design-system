import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonSeverity } from 'primeng/button';

@Component({
  selector: 'app-primeng-button',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <p-button
      [label]="label"
      [severity]="severity"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [icon]="icon"
      [iconPos]="iconPos"
      (onClick)="onClick.emit($event)"
    ></p-button>
  `,
})
export class PrimengButtonComponent {
  @Input() label: string = '';
  @Input() severity: ButtonSeverity = 'primary';
  @Input() size: 'small' | 'large' = 'small';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() icon: string = '';
  @Input() iconPos: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Output() onClick = new EventEmitter<any>();
}
