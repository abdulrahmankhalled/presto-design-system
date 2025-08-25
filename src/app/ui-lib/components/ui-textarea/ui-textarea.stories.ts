import type { Meta, StoryObj } from '@storybook/angular';
import { UiTextareaComponent } from './ui-textarea.component';

const meta: Meta<UiTextareaComponent> = {
  title: 'UI/Textarea',
  component: UiTextareaComponent,
  args: {
    value: 'Hello',
    rows: 4,
    size: 'md',
    placeholder: 'Type your message',
  },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiTextareaComponent>;

export const Default: Story = {};
