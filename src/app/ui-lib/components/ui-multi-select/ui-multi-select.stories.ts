import type { Meta, StoryObj } from '@storybook/angular';
import { UiMultiSelectComponent } from './ui-multi-select.component';

const meta: Meta<UiMultiSelectComponent<string>> = {
  title: 'UI/MultiSelect',
  component: UiMultiSelectComponent,
  args: {
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ],
    model: ['green'],
    placeholder: 'Pick colors',
  },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiMultiSelectComponent<string>>;

export const Default: Story = {};
