import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule,FontAwesomeModule],
  template: `
    <p-button
      [label]="label"
      [icon]="icon"
      [iconPos]="iconPos"
      [severity]="severity"
      [outlined]="outlined"
      [text]="text"
      [raised]="raised"
      [rounded]="rounded"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [loadingIcon]="loadingIcon"
      [badge]="badge"
      (onClick)="onClick.emit($event)"
      (onFocus)="onFocus.emit($event)"
      (onBlur)="onBlur.emit($event)"
    >
    <ng-container *ngIf="icon">
        <fa-icon 
          [icon]="icon" 
          [class]="iconClass"
          [style.margin-right]="iconPos === 'left' ? '0.5rem' : null"
          [style.margin-left]="iconPos === 'right' ? '0.5rem' : null"
        ></fa-icon>
      </ng-container>
      {{ label }}
    </p-button>
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
  @Input() severity: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger'| 'contrast' = 'primary';
  @Input() disabled: boolean = false;
  @Input() outlined: boolean = false;
  @Input() text: boolean = false;
  @Input() styleClass: string = '';

  @Input() raised: boolean = false;
  @Input() link: boolean = false;
  @Input() rounded: boolean = false;
  @Input() fluid: boolean = false;
  @Input() size: 'small' | 'large' = 'small';
  @Input() loading: boolean = false;
  @Input() loadingIcon: string = 'pi pi-spinner pi-spin';
  @Input() badge: string = '';
  @Input() badgeClass: string = '';

  @Output() onClick = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();
  get iconClass(): string {
    return this.iconPos === 'right' ? 'order-2' : '';
  }
}