import type { Meta, StoryObj } from '@storybook/angular';
import { UiSelectButtonComponent } from './ui-select-button.component';

const meta: Meta<UiSelectButtonComponent<string>> = {
  title: 'UI/SelectButton',
  component: UiSelectButtonComponent,
  args: {
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Orange', value: 'orange' },
      { label: 'Banana', value: 'banana' },
    ],
    multiple: true,
    model: ['apple'],
  },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiSelectButtonComponent<string>>;

export const Default: Story = {};
