import type { Meta, StoryObj } from '@storybook/angular';
import { UiAutoCompleteComponent } from './ui-autocomplete.component';

const meta: Meta<UiAutoCompleteComponent<string>> = {
  title: 'UI/AutoComplete',
  component: UiAutoCompleteComponent,
  args: {
    placeholder: 'Search...',
    dropdown: true,
    forceSelection: false,
    size: 'md',
    model: null,
    suggestions: [],
  },
  render: (args) => ({
    props: {
      ...args,
      completeMethod: (e: { query: string }) => {
        const all = ['Angular', 'React', 'Vue', 'Svelte'];
        const q = e.query.toLowerCase();
        (args as any).suggestions = all.filter((v) =>
          v.toLowerCase().includes(q)
        );
      },
    },
    template: `
      <div class="w-80">
        <ui-autocomplete
          [placeholder]="placeholder"
          [dropdown]="dropdown"
          [forceSelection]="forceSelection"
          [suggestions]="suggestions"
          [size]="size"
          [model]="model"
          (modelChange)="model=$event"
          [completeMethod]="completeMethod"
        />
        <div class="mt-2 text-sm text-gray-600">Value: {{ model || 'none' }}</div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<UiAutoCompleteComponent<string>>;

export const Default: Story = {};
