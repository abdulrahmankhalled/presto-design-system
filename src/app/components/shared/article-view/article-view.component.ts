import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent {
  @Input() section: string = '';
  @Input() title: string = '';
  @Input() previousLink: string = '';
  @Input() previousTitle: string = '';
  @Input() nextLink: string = '';
  @Input() nextTitle: string = '';
}
