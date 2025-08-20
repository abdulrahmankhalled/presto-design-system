import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'getting-started/quick-start',
    pathMatch: 'full',
  },
  {
    path: 'getting-started/quick-start',
    loadComponent: () =>
      import('./pages/getting-started/quick-start/quick-start.component').then(
        (m) => m.QuickStartComponent
      ),
  },
  {
    path: 'getting-started/how-it-works',
    loadComponent: () =>
      import(
        './pages/getting-started/how-it-works/how-it-works.component'
      ).then((m) => m.HowItWorksComponent),
  },
  {
    path: 'components/overview',
    loadComponent: () =>
      import('./pages/components/overview/overview.component').then(
        (m) => m.OverviewComponent
      ),
  },
  {
    path: 'components/usage',
    loadComponent: () =>
      import('./pages/components/usage/usage.component').then(
        (m) => m.UsageComponent
      ),
  },
  {
    path: 'advanced/configuration',
    loadComponent: () =>
      import('./pages/advanced/configuration/configuration.component').then(
        (m) => m.ConfigurationComponent
      ),
  },
  {
    path: 'advanced/customization',
    loadComponent: () =>
      import('./pages/advanced/customization/customization.component').then(
        (m) => m.CustomizationComponent
      ),
  },
];
