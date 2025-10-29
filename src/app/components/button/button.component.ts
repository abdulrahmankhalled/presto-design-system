import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <p-button
      [label]="label"
      [icon]="icon"
      [iconPos]="iconPos"
      [severity]="severity"
      [disabled]="disabled"
      [loading]="loading"
      [loadingIcon]="loadingIcon"
      [badge]="badge"
      [badgeClass]="badgeClass"
      (onClick)="onClick.emit($event)"
      (onFocus)="onFocus.emit($event)"
      (onBlur)="onBlur.emit($event)"
    ></p-button>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconPos: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() severity: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() loadingIcon: string = 'pi pi-spinner pi-spin';
  @Input() badge: string = '';
  @Input() badgeClass: string = '';

  @Output() onClick = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();
}
