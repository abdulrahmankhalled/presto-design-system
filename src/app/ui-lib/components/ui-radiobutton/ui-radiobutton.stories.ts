import type { Meta, StoryObj } from '@storybook/angular';
import { UiRadioButtonComponent } from './ui-radiobutton.component';

const meta: Meta<UiRadioButtonComponent<string>> = {
  title: 'UI/RadioButton',
  component: UiRadioButtonComponent,
  args: { name: 'group', value: 'a', model: 'a', label: 'Option A' },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiRadioButtonComponent<string>>;

export const Default: Story = {};
