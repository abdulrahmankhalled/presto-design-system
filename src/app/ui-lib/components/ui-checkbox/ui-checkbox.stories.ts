import type { Meta, StoryObj } from '@storybook/angular';
import { UiCheckboxComponent } from './ui-checkbox.component';

const meta: Meta<UiCheckboxComponent> = {
  title: 'UI/Checkbox',
  component: UiCheckboxComponent,
  args: { label: 'Accept terms', checked: false },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiCheckboxComponent>;

export const Default: Story = {};
