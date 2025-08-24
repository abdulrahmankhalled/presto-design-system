import type { Meta, StoryObj } from '@storybook/angular';
import { UiInputTextComponent } from './ui-input-text.component';

const meta: Meta<UiInputTextComponent> = {
  title: 'UI/InputText',
  component: UiInputTextComponent,
  args: {
    size: 'md',
    disabled: false,
    placeholder: 'Type here...',
    type: 'text',
    value: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-80">
        <ui-input-text [size]="size" [disabled]="disabled" [placeholder]="placeholder" [type]="type" [(value)]="value" />
        <div class="mt-2 text-sm text-gray-600">Value: {{ value }}</div>
      </div>
    `,
  }),
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiInputTextComponent>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-3 w-80">
        <ui-input-text size="sm" placeholder="Small" />
        <ui-input-text size="md" placeholder="Medium" />
        <ui-input-text size="lg" placeholder="Large" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled' },
};


