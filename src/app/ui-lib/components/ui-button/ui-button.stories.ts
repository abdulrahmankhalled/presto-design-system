import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';

const meta: Meta<UiButtonComponent> = {
  title: 'UI/Button',
  component: UiButtonComponent,
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-button [variant]="variant" [size]="size" [disabled]="disabled">
        Button
      </ui-button>
    `,
  }),
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
};

export const Success: Story = {
  args: { variant: 'success' },
};

export const Danger: Story = {
  args: { variant: 'danger' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Sizes: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div class="flex gap-4 items-center">
        <ui-button size="sm">Small</ui-button>
        <ui-button size="md">Medium</ui-button>
        <ui-button size="lg">Large</ui-button>
      </div>
    `,
  }),
};
