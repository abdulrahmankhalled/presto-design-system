import type { Meta, StoryObj } from '@storybook/angular';
import { UiSpeedDialComponent } from './ui-speed-dial.component';

const meta: Meta<UiSpeedDialComponent> = {
  title: 'UI/SpeedDial',
  component: UiSpeedDialComponent,
  args: {
    items: [
      { label: 'Save', icon: 'pi pi-save' },
      { label: 'Edit', icon: 'pi pi-pencil' },
      { label: 'Delete', icon: 'pi pi-trash' },
    ],
    direction: 'up',
  },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiSpeedDialComponent>;

export const Default: Story = {};
