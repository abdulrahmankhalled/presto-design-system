import type { Meta, StoryObj } from '@storybook/angular';
import { UiIconFieldComponent } from './ui-icon-field.component';
import { UiInputTextComponent } from '../ui-input-text/ui-input-text.component';

const meta: Meta<UiIconFieldComponent> = {
  title: 'UI/IconField',
  component: UiIconFieldComponent,
  render: () => ({
    imports: [UiIconFieldComponent, UiInputTextComponent],
    template: `
      <ui-icon-field icon="pi pi-search" position="left">
        <ui-input-text placeholder="Search" />
      </ui-icon-field>
    `,
  }),
};

export default meta;
type Story = StoryObj<UiIconFieldComponent>;

export const Default: Story = {};
