import type { Meta, StoryObj } from '@storybook/angular';
import { UiFloatLabelComponent } from './ui-float-label.component';
import { UiInputTextComponent } from '../ui-input-text/ui-input-text.component';

const meta: Meta<UiFloatLabelComponent> = {
  title: 'UI/FloatLabel',
  component: UiFloatLabelComponent,
  render: () => ({
    imports: [UiFloatLabelComponent, UiInputTextComponent],
    template: `
      <ui-float-label label="Email">
        <ui-input-text placeholder="Email"></ui-input-text>
      </ui-float-label>
    `,
  }),
};

export default meta;
type Story = StoryObj<UiFloatLabelComponent>;

export const Default: Story = {};
