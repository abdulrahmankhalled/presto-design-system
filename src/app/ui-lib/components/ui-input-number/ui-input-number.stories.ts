import type { Meta, StoryObj } from '@storybook/angular';
import { UiInputNumberComponent } from './ui-input-number.component';

const meta: Meta<UiInputNumberComponent> = {
  title: 'UI/InputNumber',
  component: UiInputNumberComponent,
  args: { value: 10, min: 0, max: 100, step: 1, size: 'md' },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiInputNumberComponent>;

export const Default: Story = {};
