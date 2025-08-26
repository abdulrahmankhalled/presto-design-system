import type { Meta, StoryObj } from '@storybook/angular';
import { UiSliderComponent } from './ui-slider.component';

const meta: Meta<UiSliderComponent> = {
  title: 'UI/Slider',
  component: UiSliderComponent,
  args: { value: 25, min: 0, max: 100, step: 1 },
  render: (args) => ({ props: args }),
};

export default meta;
type Story = StoryObj<UiSliderComponent>;

export const Default: Story = {};
