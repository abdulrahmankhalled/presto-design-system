import type { Meta, StoryObj } from '@storybook/angular';
import { UiInputGroupComponent } from './ui-input-group.component';
import { UiButtonComponent } from '../ui-button/ui-button.component';
import { UiInputTextComponent } from '../ui-input-text/ui-input-text.component';

const meta: Meta<UiInputGroupComponent> = {
  title: 'UI/InputGroup',
  component: UiInputGroupComponent,
  render: () => ({
    imports: [UiInputGroupComponent, UiInputTextComponent, UiButtonComponent],
    template: `
      <ui-input-group>
        <ui-input-text class="flex-1" placeholder="Your name" />
        <ui-button>Submit</ui-button>
      </ui-input-group>
    `,
  }),
};

export default meta;
type Story = StoryObj<UiInputGroupComponent>;

export const Default: Story = {};
