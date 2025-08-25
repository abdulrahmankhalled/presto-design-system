import type { Meta, StoryObj } from '@storybook/angular';
import { UiToggleSwitchComponent } from './ui-toggle-switch.component';

const meta: Meta<UiToggleSwitchComponent> = {
  title: 'UI/ToggleSwitch',
  component: UiToggleSwitchComponent,
  args: { checked: true },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiToggleSwitchComponent>;

export const Default: Story = {};
