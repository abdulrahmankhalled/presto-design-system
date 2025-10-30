import type { Meta, StoryObj } from '@storybook/angular';
import { ColorShowcaseComponent } from './color-showcase.component';

const meta: Meta<ColorShowcaseComponent> = {
  title: 'PRESTO/Color System',
  component: ColorShowcaseComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The PRESTO Color System provides a comprehensive set of design tokens that can be used throughout your application.

**Features:**
- Brand primary colors (100-900 scale)
- Semantic color tokens for consistent theming
- CSS custom properties for easy customization
- Tailwind CSS integration
- Light and dark mode support
- PrimeNG theme integration

**Usage:**
- **Tailwind**: Use classes like \`bg-presto-primary\`, \`text-presto-text-primary\`
- **CSS**: Use custom properties like \`var(--presto-primary)\`
- **PrimeNG**: Automatically applied through the PRESTO theme

**Customization:**
To change colors, simply update the CSS custom properties in \`src/styles/presto-tokens.css\`.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};

export const ColorPalette: Story = {
  render: () => ({
    template: `
      <div class="p-8 space-y-8">
        <h2 class="text-3xl font-bold text-presto-text-primary mb-8">PRESTO Brand Colors</h2>
        
        <!-- Primary Scale -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-presto-text-primary">Primary Color Scale</h3>
          <div class="grid grid-cols-9 gap-2">
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-100 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">100</p>
              <p class="text-xs text-presto-text-muted font-mono">#CCDDD8</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-200 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">200</p>
              <p class="text-xs text-presto-text-muted font-mono">#99BCB1</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-300 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">300</p>
              <p class="text-xs text-presto-text-muted font-mono">#669A8B</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-400 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">400</p>
              <p class="text-xs text-presto-text-muted font-mono">#337964</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-500 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary font-bold">500</p>
              <p class="text-xs text-presto-text-muted font-mono">#00573D</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-600 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">600</p>
              <p class="text-xs text-presto-text-muted font-mono">#004631</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-700 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">700</p>
              <p class="text-xs text-presto-text-muted font-mono">#003425</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-800 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">800</p>
              <p class="text-xs text-presto-text-muted font-mono">#002318</p>
            </div>
            <div class="text-center space-y-2">
              <div class="h-20 rounded-lg bg-presto-900 border border-presto-border-light"></div>
              <p class="text-xs text-presto-text-secondary">900</p>
              <p class="text-xs text-presto-text-muted font-mono">#00110C</p>
            </div>
          </div>
        </div>

        <!-- Semantic Tokens -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-presto-text-primary">Semantic Tokens</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="space-y-2">
              <div class="h-16 rounded-lg bg-presto-primary border border-presto-border-light flex items-center justify-center">
                <span class="text-presto-primary-contrast font-semibold">Primary</span>
              </div>
              <p class="text-sm text-presto-text-secondary">var(--presto-primary)</p>
            </div>
            <div class="space-y-2">
              <div class="h-16 rounded-lg bg-presto-primary-hover border border-presto-border-light flex items-center justify-center">
                <span class="text-presto-primary-contrast font-semibold">Hover</span>
              </div>
              <p class="text-sm text-presto-text-secondary">var(--presto-primary-hover)</p>
            </div>
            <div class="space-y-2">
              <div class="h-16 rounded-lg bg-presto-primary-active border border-presto-border-light flex items-center justify-center">
                <span class="text-presto-primary-contrast font-semibold">Active</span>
              </div>
              <p class="text-sm text-presto-text-secondary">var(--presto-primary-active)</p>
            </div>
            <div class="space-y-2">
              <div class="h-16 rounded-lg bg-presto-highlight-bg border border-presto-border-light flex items-center justify-center">
                <span class="text-presto-highlight-color font-semibold">Highlight</span>
              </div>
              <p class="text-sm text-presto-text-secondary">var(--presto-highlight-background)</p>
            </div>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [ColorShowcaseComponent],
    },
  }),
};