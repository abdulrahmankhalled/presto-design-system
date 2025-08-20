import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleViewComponent } from '../../../components/shared/article-view/article-view.component';

@Component({
  selector: 'app-quick-start',
  standalone: true,
  imports: [RouterLink, ArticleViewComponent],
  templateUrl: './quick-start.component.html',
  styleUrl: './quick-start.component.scss',
})
export class QuickStartComponent {}
