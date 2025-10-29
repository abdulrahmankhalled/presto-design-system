import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-color-showcase',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="p-8 space-y-8">
      <h2 class="text-3xl font-bold text-presto-text-primary mb-8">
        PRESTO Design System
      </h2>

      <!-- Brand Primary Colors -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Brand Primary Colors
        </h3>
        <div class="grid grid-cols-5 gap-4">
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-100 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">100</p>
            <p class="text-xs text-presto-text-muted">#ccddd8</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-200 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">200</p>
            <p class="text-xs text-presto-text-muted">#99bcb1</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-300 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">300</p>
            <p class="text-xs text-presto-text-muted">#669a8b</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-400 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">400</p>
            <p class="text-xs text-presto-text-muted">#337964</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-500 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary font-bold">500</p>
            <p class="text-xs text-presto-text-muted">#00573d</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-600 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">600</p>
            <p class="text-xs text-presto-text-muted">#004631</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-700 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">700</p>
            <p class="text-xs text-presto-text-muted">#003425</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-800 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">800</p>
            <p class="text-xs text-presto-text-muted">#002318</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-primary-900 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">900</p>
            <p class="text-xs text-presto-text-muted">#00110c</p>
          </div>
        </div>
      </div>

      <!-- Brand Secondary Colors -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Brand Secondary Colors
        </h3>
        <div class="grid grid-cols-5 gap-4">
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-100 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">100</p>
            <p class="text-xs text-presto-text-muted">#ccdbe8</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-200 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">200</p>
            <p class="text-xs text-presto-text-muted">#004b8d</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-300 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">300</p>
            <p class="text-xs text-presto-text-muted">#6693bb</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-400 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">400</p>
            <p class="text-xs text-presto-text-muted">#336fa4</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-500 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary font-bold">500</p>
            <p class="text-xs text-presto-text-muted">#004b8d</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-600 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">600</p>
            <p class="text-xs text-presto-text-muted">#003c71</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-700 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">700</p>
            <p class="text-xs text-presto-text-muted">#002d55</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-800 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">800</p>
            <p class="text-xs text-presto-text-muted">#001e38</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-secondary-900 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">900</p>
            <p class="text-xs text-presto-text-muted">#000f1c</p>
          </div>
        </div>
      </div>

      <!-- Brand Gray Colors -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Brand Gray Colors
        </h3>
        <div class="grid grid-cols-5 gap-4">
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-100 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">100</p>
            <p class="text-xs text-presto-text-muted">#f5f8fa</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-200 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">200</p>
            <p class="text-xs text-presto-text-muted">#ebf1f6</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-300 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">300</p>
            <p class="text-xs text-presto-text-muted">#e0e9f1</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-400 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">400</p>
            <p class="text-xs text-presto-text-muted">#d6e2ed</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-500 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary font-bold">500</p>
            <p class="text-xs text-presto-text-muted">#ccdbe8</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-600 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">600</p>
            <p class="text-xs text-presto-text-muted">#a3afba</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-700 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">700</p>
            <p class="text-xs text-presto-text-muted">#7a838b</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-800 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">800</p>
            <p class="text-xs text-presto-text-muted">#52585d</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 rounded-lg bg-presto-gray-900 border border-presto-border-light"
            ></div>
            <p class="text-sm text-presto-text-secondary">900</p>
            <p class="text-xs text-presto-text-muted">#292c2e</p>
          </div>
        </div>
      </div>

      <!-- Button Examples -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          PrimeNG Buttons
        </h3>
        <div class="flex flex-wrap gap-4">
          <p-button label="Primary Button" severity="primary"></p-button>
          <p-button label="Secondary Button" severity="secondary"></p-button>
        </div>
      </div>

      <!-- Border Radius Examples -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Border Radius Tokens
        </h3>
        <div class="grid grid-cols-4 gap-4">
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-none flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >None</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">0px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-none</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-xs flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >XS</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">4px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-xs</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-sm flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >SM</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">8px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-sm</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-md flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >MD</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">12px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-md</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-lg flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >LG</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">24px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-lg</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-xl flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >XL</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">28px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-xl</p>
          </div>
          <div class="space-y-2">
            <div
              class="h-16 bg-presto-primary-500 rounded-presto-xxl flex items-center justify-center"
            >
              <span class="text-presto-primary-contrast text-sm font-semibold"
                >XXL</span
              >
            </div>
            <p class="text-sm text-presto-text-secondary">32px</p>
            <p class="text-xs text-presto-text-muted">rounded-presto-xxl</p>
          </div>
        </div>
      </div>

      <!-- Usage Examples -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-presto-text-primary">
          Usage Examples
        </h3>
        <div class="space-y-4">
          <div
            class="p-4 bg-presto-surface-100 rounded-presto-md border border-presto-border-light"
          >
            <p class="text-presto-text-primary">
              Background:
              <code
                class="bg-presto-surface-200 px-2 py-1 rounded-presto-xs text-sm"
                >bg-presto-surface-100</code
              >
            </p>
          </div>
          <div
            class="p-4 bg-presto-primary text-presto-primary-contrast rounded-presto-md"
          >
            <p>
              Primary Button:
              <code
                class="bg-presto-primary-hover px-2 py-1 rounded-presto-xs text-sm"
                >bg-presto-primary</code
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ColorShowcaseComponent {}
