import type { Meta, StoryObj } from '@storybook/angular';
import { PrimengButtonComponent } from './primeng-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<PrimengButtonComponent> = {
  title: 'PrimeNG/Button',
  component: PrimengButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/angular/writing-docs/docs-page
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    severity: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'help',
        'danger',
        'contrast',
      ],
      description: 'Button severity/color variant',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
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
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/angular/essentials/actions#action-args
  args: { onClick: () => {} },
};

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
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

export const Success: Story = {
  args: {
    label: 'Success Button',
    severity: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    severity: 'warning',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    severity: 'danger',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    severity: 'primary',
    icon: 'pi pi-check',
    iconPos: 'left',
  },
};

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

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-4 p-4">
        <app-primeng-button label="Primary" severity="primary"></app-primeng-button>
        <app-primeng-button label="Secondary" severity="secondary"></app-primeng-button>
        <app-primeng-button label="Success" severity="success"></app-primeng-button>
        <app-primeng-button label="Info" severity="info"></app-primeng-button>
        <app-primeng-button label="Warning" severity="warning"></app-primeng-button>
        <app-primeng-button label="Help" severity="help"></app-primeng-button>
        <app-primeng-button label="Danger" severity="danger"></app-primeng-button>
        <app-primeng-button label="Contrast" severity="contrast"></app-primeng-button>
      </div>
    `,
    moduleMetadata: {
      imports: [PrimengButtonComponent],
    },
  }),
};
