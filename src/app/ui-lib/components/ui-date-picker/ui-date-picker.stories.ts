import type { Meta, StoryObj } from '@storybook/angular';
import { UiDatePickerComponent } from './ui-date-picker.component';

const meta: Meta<UiDatePickerComponent> = {
  title: 'UI/DatePicker',
  component: UiDatePickerComponent,
  args: { placeholder: 'Pick a date', showIcon: true, size: 'md', value: null },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiDatePickerComponent>;

export const Default: Story = {};
