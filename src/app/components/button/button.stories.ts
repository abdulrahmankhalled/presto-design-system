import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';

const meta: Meta = {
  title: 'PRESTO/Button',
  component: ButtonModule,
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
  render: (args) => ({
    props: args,
    template: `<p-button label="Primary Button" severity="primary"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: `<p-button label="Secondary Button" severity="secondary"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// Icon variants
export const WithIcon: Story = {
  render: (args) => ({
    props: args,
    template: `<p-button label="Button with Icon" severity="primary" icon="pi pi-check" iconPos="left"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const IconOnly: Story = {
  render: (args) => ({
    props: args,
    template: `<p-button severity="primary" icon="pi pi-star"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// State variants
export const Loading: Story = {
  render: (args) => ({
    props: args,
    template: `<p-button label="Loading Button" severity="primary" [loading]="true"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `<p-button label="Disabled Button" severity="primary" [disabled]="true"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    severity: "primary"
  },

  render: () => ({
    template: `
      <div class="space-y-8 p-8">
        <!-- Basic Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Basic Variants</h3>
          <div class="flex flex-wrap gap-4">
            <p-button label="Primary" severity="primary"></p-button>
            <p-button label="Secondary" severity="secondary"></p-button>
          </div>
        </div>

        <!-- Icon Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Icon Variants</h3>
          <div class="flex flex-wrap gap-4">
            <p-button label="Primary with Icon" severity="primary" icon="pi pi-check" iconPos="left"></p-button>
            <p-button label="Secondary with Icon" severity="secondary" icon="pi pi-arrow-right" iconPos="right"></p-button>
            <p-button severity="primary" icon="pi pi-star"></p-button>
            <p-button severity="secondary" icon="pi pi-heart"></p-button>
          </div>
        </div>

        <!-- State Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">State Variants</h3>
          <div class="flex flex-wrap gap-4">
            <p-button label="Normal Primary" severity="primary"></p-button>
            <p-button label="Loading Primary" severity="primary" [loading]="true"></p-button>
            <p-button label="Disabled Primary" severity="primary" [disabled]="true"></p-button>
            <p-button label="Normal Secondary" severity="secondary"></p-button>
            <p-button label="Loading Secondary" severity="secondary" [loading]="true"></p-button>
            <p-button label="Disabled Secondary" severity="secondary" [disabled]="true"></p-button>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  })
};
