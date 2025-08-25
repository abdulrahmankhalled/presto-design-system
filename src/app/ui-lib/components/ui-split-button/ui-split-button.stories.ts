import type { Meta, StoryObj } from '@storybook/angular';
import { UiSplitButtonComponent } from './ui-split-button.component';

const meta: Meta<UiSplitButtonComponent> = {
  title: 'UI/SplitButton',
  component: UiSplitButtonComponent,
  args: {
    label: 'Actions',
    items: [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
    ],
  },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiSplitButtonComponent>;

export const Default: Story = {};
