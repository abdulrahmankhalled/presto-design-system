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
- Size variants (small, normal, large)
- Full accessibility support

**Design Tokens Used:**
- Colors: PRESTO theme palette
- Border radius: PrimeNG default with rounded option
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
    size: {
      control: 'select',
      options: ['small', 'normal', 'large'],
      description: 'Button size',
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
    raised: {
      control: 'boolean',
      description: 'Whether the button has raised style',
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the button has rounded corners',
    },
    text: {
      control: 'boolean',
      description: 'Whether the button has text style',
    },
    outlined: {
      control: 'boolean',
      description: 'Whether the button has outlined style',
    },
    link: {
      control: 'boolean',
      description: 'Whether the button has link style',
    },
    plain: {
      control: 'boolean',
      description: 'Whether the button has plain style',
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

// Style variants
export const Raised: Story = {
  args: {
    label: 'Raised Button',
    severity: 'primary',
    raised: true,
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded Button',
    severity: 'primary',
    rounded: true,
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    severity: 'primary',
    text: true,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    severity: 'primary',
    outlined: true,
  },
};

export const Link: Story = {
  args: {
    label: 'Link Button',
    severity: 'primary',
    link: true,
  },
};

export const Plain: Story = {
  args: {
    label: 'Plain Button',
    severity: 'primary',
    plain: true,
  },
};

// Size variants
export const Small: Story = {
  args: {
    label: 'Small Button',
    severity: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    severity: 'primary',
    size: 'large',
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

        <!-- Style Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Style Variants</h3>
          <div class="flex flex-wrap gap-4">
            <app-button label="Default" severity="primary"></app-button>
            <app-button label="Raised" severity="primary" [raised]="true"></app-button>
            <app-button label="Rounded" severity="primary" [rounded]="true"></app-button>
            <app-button label="Text" severity="primary" [text]="true"></app-button>
            <app-button label="Outlined" severity="primary" [outlined]="true"></app-button>
            <app-button label="Link" severity="primary" [link]="true"></app-button>
            <app-button label="Plain" severity="primary" [plain]="true"></app-button>
          </div>
        </div>

        <!-- Size Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Size Variants</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <app-button label="Small" severity="primary" size="small"></app-button>
            <app-button label="Normal" severity="primary"></app-button>
            <app-button label="Large" severity="primary" size="large"></app-button>
          </div>
        </div>

        <!-- State Variants -->
        <div>
          <h3 class="text-lg font-semibold mb-4">State Variants</h3>
          <div class="flex flex-wrap gap-4">
            <app-button label="Normal" severity="primary"></app-button>
            <app-button label="Loading" severity="primary" [loading]="true"></app-button>
            <app-button label="Disabled" severity="primary" [disabled]="true"></app-button>
          </div>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [ButtonComponent],
    },
  }),
};
