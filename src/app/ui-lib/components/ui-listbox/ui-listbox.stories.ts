import type { Meta, StoryObj } from '@storybook/angular';
import { UiListboxComponent } from './ui-listbox.component';

const meta: Meta<UiListboxComponent<number>> = {
  title: 'UI/Listbox',
  component: UiListboxComponent,
  args: {
    options: [
      { label: 'One', value: 1 },
      { label: 'Two', value: 2 },
      { label: 'Three', value: 3 },
    ],
    multiple: true,
    model: [1],
  },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiListboxComponent<number>>;

export const Default: Story = {};
