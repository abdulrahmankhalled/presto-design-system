import type { Meta, StoryObj } from '@storybook/angular';
import { UiInputOtpComponent } from './ui-input-otp.component';

const meta: Meta<UiInputOtpComponent> = {
  title: 'UI/InputOtp',
  component: UiInputOtpComponent,
  args: { length: 6, size: 'md', value: '' },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiInputOtpComponent>;

export const Default: Story = {};
