import type { Meta, StoryObj } from '@storybook/angular';
import { UiDropdownComponent, UiDropdownOption } from './ui-dropdown.component';

const sampleOptions: UiDropdownOption<number>[] = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
];

const meta: Meta<UiDropdownComponent<number>> = {
  title: 'UI/Dropdown',
  component: UiDropdownComponent,
  args: {
    size: 'md',
    disabled: false,
    placeholder: 'Select...',
    options: sampleOptions,
    clearable: true,
    filter: true,
    filterPlaceholder: 'Search...',
    model: null,
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-80">
        <ui-dropdown
          [options]="options"
          [placeholder]="placeholder"
          [clearable]="clearable"
          [filter]="filter"
          [filterPlaceholder]="filterPlaceholder"
          [size]="size"
          [(model)]="model" />
        <div class="mt-2 text-sm text-gray-600">Value: {{ model || 'none' }}</div>
      </div>
    `,
  }),
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiDropdownComponent<number>>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => ({
    props: { options: sampleOptions },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <ui-dropdown [options]="options" size="sm" placeholder="Small" />
        <ui-dropdown [options]="options" size="md" placeholder="Medium" />
        <ui-dropdown [options]="options" size="lg" placeholder="Large" />
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
};


