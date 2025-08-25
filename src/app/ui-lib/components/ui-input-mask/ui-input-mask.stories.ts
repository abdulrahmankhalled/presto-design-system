import type { Meta, StoryObj } from '@storybook/angular';
import { UiInputMaskComponent } from './ui-input-mask.component';

const meta: Meta<UiInputMaskComponent> = {
  title: 'UI/InputMask',
  component: UiInputMaskComponent,
  args: { mask: '(999) 999-9999', placeholder: 'Phone', size: 'md', value: '' },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiInputMaskComponent>;

export const Default: Story = {};
