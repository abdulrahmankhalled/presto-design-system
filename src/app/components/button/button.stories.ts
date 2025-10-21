import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck, faInfo, faStar } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
  title: 'PRESTO/Button',
  component: ButtonModule,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A comprehensive button component showcasing PrimeNG's Button with PRESTO theme integration.

**Features:**
- All severity variants: primary, secondary, success, info, warn, help, danger
- Style variants: filled, outlined, text-only
- Special effects: raised (elevation), rounded
- Size options: small, normal, large
- Icon support with positioning options (left, right, top, bottom)
- Loading states and badges
- Full accessibility support

**Design Tokens Used:**
- Colors: PRESTO theme palette
- Border radius: PrimeNG default
- Spacing: PrimeNG default spacing system
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast-light', 'contrast-dark'],
      description: 'Button severity/color variant',
    },
    outlined: {
      control: 'boolean',
      description: 'Whether the button is outlined',
    },
    text: {
      control: 'boolean',
      description: 'Whether the button is text-only',
    },
    raised: {
      control: 'boolean',
      description: 'Whether the button has elevation/shadow',
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the button is fully rounded',
    },
    size: {
      control: 'select',
      options: ['small', 'normal', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    icon: {
      control: 'text',
      description: 'Font Awesome icon class name (e.g., fas fa-check, far fa-star, fab fa-github)',
    },
    iconPos: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the icon',
    },
    badge: {
      control: 'text',
      description: 'Badge text to display on the button',
    },
  },
  args: {
    onClick: () => {},
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Basic variants
export const Primary: Story = {
  args: {
    label: 'Button Label',
    severity: 'primary',
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const Secondary: Story = {
  args: {
    label: 'Button Label',
    severity: 'secondary',
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const green: Story = {
  args: {
    label: 'Button Label',
    severity: 'success',
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const Info: Story = {
  args: {
    label: 'Button Label',
    severity: 'info',
    icon: 'fas fa-info',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const Warn: Story = {
  args: {
    label: 'Button Label',
    severity: 'warn',
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const Help: Story = {
  args: {
    label: 'Button Label',
    severity: 'help',
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const Danger: Story = {
  args: {
    label: 'Button Label',
    severity: 'danger',
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// Outlined variants
export const OutlinedPrimary: Story = {
  args: {
    label: 'Button Label',
    severity: 'primary',
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const OutlinedSecondary: Story = {
  args: {
    label: 'Button Label',
    severity: 'secondary',
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const OutlinedSuccess: Story = {
  args: {
    label: 'Button Label',
    severity: 'success',
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const OutlinedInfo: Story = {
  args: {
    label: 'Button Label',
    severity: 'info',
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const OutlinedWarn: Story = {
  args: {
    label: 'Button Label',
    severity: 'warn',
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const OutlinedHelp: Story = {
  args: {
    label: 'Button Label',
    severity: 'help',
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const OutlinedDanger: Story = {
  args: {
    label: 'Button Label',
    severity: 'danger',
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// Text variants
export const TextPrimary: Story = {
  args: {
    label: 'Button Label',
    severity: 'primary',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const TextSecondary: Story = {
  args: {
    label: 'Button Label',
    severity: 'secondary',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const TextSuccess: Story = {
  args: {
    label: 'Text Success',
    severity: 'success',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const TextInfo: Story = {
  args: {
    label: 'Text Info',
    severity: 'info',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const TextWarn: Story = {
  args: {
    label: 'Text Warn',
    severity: 'warn',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const TextHelp: Story = {
  args: {
    label: 'Text Help',
    severity: 'help',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const TextDanger: Story = {
  args: {
    label: 'Text Danger',
    severity: 'danger',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// Raised variants
export const RaisedPrimary: Story = {
  args: {
    label: 'Raised Primary',
    severity: 'primary',
    raised: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [raised]="raised"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};


// Rounded variants
export const RoundedPrimary: Story = {
  args: {
    label: 'Rounded Primary',
    severity: 'primary',
    rounded: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedSecondary: Story = {
  args: {
    label: 'Rounded Secondary',
    severity: 'secondary',
    rounded: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedSuccess: Story = {
  args: {
    label: 'Rounded Success',
    severity: 'success',
    rounded: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedInfo: Story = {
  args: {
    label: 'Rounded Info',
    severity: 'info',
    rounded: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedWarn: Story = {
  args: {
    label: 'Rounded Warn',
    severity: 'warn',
    rounded: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedHelp: Story = {
  args: {
    label: 'Rounded Help',
    severity: 'help',
    rounded: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedDanger: Story = {
  args: {
    label: 'Rounded Danger',
    severity: 'danger',
    rounded: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// Rounded Outlined Variants - All Severities
export const RoundedOutlinedPrimary: Story = {
  args: {
    label: 'Rounded Outlined Primary',
    severity: 'primary',
    rounded: true,
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedOutlinedSecondary: Story = {
  args: {
    label: 'Rounded Outlined Secondary',
    severity: 'secondary',
    rounded: true,
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedOutlinedSuccess: Story = {
  args: {
    label: 'Rounded Outlined Success',
    severity: 'success',
    rounded: true,
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedOutlinedInfo: Story = {
  args: {
    label: 'Rounded Outlined Info',
    severity: 'info',
    rounded: true,
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedOutlinedWarn: Story = {
  args: {
    label: 'Rounded Outlined Warn',
    severity: 'warn',
    rounded: true,
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedOutlinedHelp: Story = {
  args: {
    label: 'Rounded Outlined Help',
    severity: 'help',
    rounded: true,
    outlined: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedOutlinedDanger: Story = {
  args: {
    label: 'Rounded Outlined Danger',
    severity: 'danger',
    rounded: true,
    outlined: true,
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// Rounded Text Variants - All Severities
export const RoundedTextPrimary: Story = {
  args: {
    label: 'Rounded Text Primary',
    severity: 'primary',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedTextSecondary: Story = {
  args: {
    label: 'Rounded Text Secondary',
    severity: 'secondary',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedTextSuccess: Story = {
  args: {
    label: 'Rounded Text Success',
    severity: 'success',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedTextInfo: Story = {
  args: {
    label: 'Rounded Text Info',
    severity: 'info',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedTextWarn: Story = {
  args: {
    label: 'Rounded Text Warn',
    severity: 'warn',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedTextHelp: Story = {
  args: {
    label: 'Rounded Text Help',
    severity: 'help',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const RoundedTextDanger: Story = {
  args: {
    label: 'Rounded Text Danger',
    severity: 'danger',
    text: true,
    icon: 'fas fa-check',
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos" ></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// Size variants
export const SmallButton: Story = {
  args: {
    label: 'Small Button',
    severity: 'primary',
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [size]="size"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const NormalButton: Story = {
  args: {
    label: 'Normal Button',
    severity: 'primary',
    size: 'normal',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [size]="size"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const LargeButton: Story = {
  args: {
    label: 'Large Button',
    severity: 'primary',
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [size]="size"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};


export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    severity: 'primary',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [disabled]="disabled"></p-button>`,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

// All variants showcase
export const ContrastLight: Story = {
  render: () => ({
    template: `
      <div class="p-4 space-y-4">
        <h2 class="text-xl font-bold mb-4">Contrast Light Theme Buttons</h2>
        <div class="flex flex-wrap gap-4">
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" styleClass="contrast-light"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [outlined]="true" styleClass="contrast-light-outlined"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [text]="true" styleClass="contrast-light-text"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [rounded]="true" styleClass="contrast-light"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [rounded]="true" [outlined]="true" styleClass="contrast-light-outlined"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [rounded]="true" [text]="true" styleClass="contrast-light-text"></p-button>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const ContrastDark: Story = {
  render: () => ({
    template: `
      <div class="p-4 space-y-4 bg-gray-900">
        <h2 class="text-xl font-bold mb-4 text-white">Contrast Dark Theme Buttons</h2>
        <div class="flex flex-wrap gap-4">
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" styleClass="contrast-dark"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [outlined]="true" styleClass="contrast-dark-outlined"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [text]="true" styleClass="contrast-dark-text"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [rounded]="true" styleClass="contrast-dark"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [rounded]="true" [outlined]="true" styleClass="contrast-dark-outlined"></p-button>
          <p-button label="Button Label" icon="fas fa-check" iconPos="left" [rounded]="true" [text]="true" styleClass="contrast-dark-text"></p-button>
        </div>
      </div>
    `,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="p-4">
        <h2 class="text-xl font-bold mb-6 text-black">P02.1.1 Core Component(s)</h2>
        
        <!-- Grid Layout: 4 columns (Label, Filled, Outlined, Text Only) -->
        <div class="grid grid-cols-4 gap-4 max-w-4xl text-gray-500 py-4">
          <!-- Empty cell for alignment -->
          <div></div>
          <!-- Column Headers -->
          <div class="font-semibold text-center bg-gray-200 p-2">Filled</div>
          <div class="font-semibold text-center bg-gray-200 p-2">Outlined</div>
          <div class="font-semibold text-center bg-gray-200 p-2">Text Only</div>
          
          <!-- Primary Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Primary</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="primary" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="primary" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="primary" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Secondary Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Secondary</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="secondary" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="secondary" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="secondary" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Success Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">green</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="success" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="success" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="success" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Info Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Info</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="info" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="info" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="info" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Warn Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Warn</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="warn" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="warn" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="warn" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Help Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Help</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="help" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="help" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="help" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Danger Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Danger</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="danger" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="danger" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="danger" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Contrast Light Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Contrast Light</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="contrast-light" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="contrast-light" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="contrast-light" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Contrast Dark Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Contrast Dark</div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="contrast-dark" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="contrast-dark" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" severity="contrast-dark" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
        </div>
         <!-- Grid Layout: 3 columns (Filled, Outlined, Text Only) -->
        <div class="grid grid-cols-4 gap-4 max-w-4xl text-gray-500">
          <!-- Column Headers -->
          <div class="font-semibold text-center text-gray-500"></div>
          <div class="font-semibold text-center text-gray-500 bg-gray-200 p-2">Filled</div>
          <div class="font-semibold text-gray-500 text-center bg-gray-200 p-2">Outlined</div>
          <div class="font-semibold text-gray-500 text-center bg-gray-200 p-2">Text Only</div>
          
          <!-- Primary Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Primary</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="primary" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="primary" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="primary" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Secondary Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Secondary</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="secondary" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="secondary" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="secondary" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Success Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Success</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="success" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="success" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="success" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Info Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Info</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="info" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="info" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="info" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Warn Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center bg-gray-200 p-2">Warn</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="warn" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="warn" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="warn" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Help Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Help</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="help" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="help" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="help" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Danger Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Danger</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="danger" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="danger" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="danger" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Contrast Light Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Contrast Light</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="contrast-light" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="contrast-light" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="contrast-light" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          
          <!-- Contrast Dark Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Contrast Dark</div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="contrast-dark" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="contrast-dark" [outlined]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button Label" [rounded]="true" severity="contrast-dark" [text]="true" icon="fas fa-check" iconPos="left"></p-button>
          </div>
        </div>
        
    `,
    moduleMetadata: {
      imports: [ButtonModule],
    },
  }),
};