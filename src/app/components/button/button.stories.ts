import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'PRESTO/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A button component that wraps PrimeNG's Button with PRESTO theme integration.

**Features:**
- Primary and Secondary button variants
- PRESTO theme integration
- Icon support with positioning options
- Loading states and badges
- Full accessibility support

**Design Tokens Used:**
- Colors: PRESTO theme palette
- Border radius: PrimeNG default
- Spacing: PrimeNG default spacing system
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    severity: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button severity/color variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    icon: {
      control: 'text',
      description: 'Icon class name (e.g., pi pi-check)',
    },
    iconPos: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the icon',
    },
    badge: {
      control: 'text',
      description: 'Badge text to display on the button',
    },
  },
  args: {
    onClick: () => {},
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Basic variants
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    severity: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    severity: 'secondary',
  },
};

// Icon variants
export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    severity: 'primary',
    icon: 'pi pi-check',
    iconPos: 'left',
  },
};

export const IconOnly: Story = {
  args: {
    severity: 'primary',
    icon: 'pi pi-star',
    iconPos: 'left',
  },
};

// State variants
export const Loading: Story = {
  args: {
    label: 'Loading Button',
    severity: 'primary',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    severity: 'primary',
    disabled: true,
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="space-y-8 p-8">
        <!-- Basic Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Basic Variants</h3>
          <div class="flex flex-wrap gap-4">
            <app-button label="Primary" severity="primary"></app-button>
            <app-button label="Secondary" severity="secondary"></app-button>
          </div>
        </div>

        <!-- Icon Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Icon Variants</h3>
          <div class="flex flex-wrap gap-4">
            <app-button label="Primary with Icon" severity="primary" icon="pi pi-check" iconPos="left"></app-button>
            <app-button label="Secondary with Icon" severity="secondary" icon="pi pi-arrow-right" iconPos="right"></app-button>
            <app-button severity="primary" icon="pi pi-star"></app-button>
            <app-button severity="secondary" icon="pi pi-heart"></app-button>
          </div>
        </div>

        <!-- State Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">State Variants</h3>
          <div class="flex flex-wrap gap-4">
            <app-button label="Normal Primary" severity="primary"></app-button>
            <app-button label="Loading Primary" severity="primary" [loading]="true"></app-button>
            <app-button label="Disabled Primary" severity="primary" [disabled]="true"></app-button>
            <app-button label="Normal Secondary" severity="secondary"></app-button>
            <app-button label="Loading Secondary" severity="secondary" [loading]="true"></app-button>
            <app-button label="Disabled Secondary" severity="secondary" [disabled]="true"></app-button>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [ButtonComponent],
    },
  }),
};
