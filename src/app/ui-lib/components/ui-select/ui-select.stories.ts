import type { Meta, StoryObj } from '@storybook/angular';
import { UiSelectComponent } from './ui-select.component';

const meta: Meta<UiSelectComponent<number>> = {
  title: 'UI/Select',
  component: UiSelectComponent,
  args: {
    options: [
      { label: 'One', value: 1 },
      { label: 'Two', value: 2 },
    ],
    size: 'md',
    model: null,
    placeholder: 'Select...',
  },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiSelectComponent<number>>;

export const Default: Story = {};
