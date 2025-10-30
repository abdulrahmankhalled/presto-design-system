import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';
import { moduleMetadata } from '@storybook/angular';  
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck, faInfo, faStar } from '@fortawesome/free-solid-svg-icons';

const fontAwesomeFactory = () => {
  const library = new FaIconLibrary();
  library.addIcons(faCheck, faInfo, faStar);
  return library;
};
// Icon constants
const DEFAULT_ICON = 'fas fa-check';

const meta: Meta = {
  title: 'PRESTO/Button',
  component: ButtonModule,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, FontAwesomeModule],
      providers: [{ provide: FaIconLibrary, useFactory: fontAwesomeFactory }],
    }),
  ],
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
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'],
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
    label: 'Button label',
    severity: 'primary',
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    label: 'Button label',
    severity: 'secondary',
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const green: Story = {
  args: {
    label: 'Button label',
    severity: 'success',
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const Info: Story = {
  args: {
    label: 'Button label',
    severity: 'info',
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const Warn: Story = {
  args: {
    label: 'Button label',
    severity: 'warn',
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const Help: Story = {
  args: {
    label: 'Button label',
    severity: 'help',
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const Danger: Story = {
  args: {
    label: 'Button label',
    severity: 'danger',
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

// Outlined variants
export const OutlinedPrimary: Story = {
  args: {
    label: 'Button label',
    severity: 'primary',
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const OutlinedSecondary: Story = {
  args: {
    label: 'Button label',
    severity: 'secondary',
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const OutlinedSuccess: Story = {
  args: {
    label: 'Button label',
    severity: 'success',
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const OutlinedInfo: Story = {
  args: {
    label: 'Button label',
    severity: 'info',
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const OutlinedWarn: Story = {
  args: {
    label: 'Button label',
    severity: 'warn',
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const OutlinedHelp: Story = {
  args: {
    label: 'Button label',
    severity: 'help',
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const OutlinedDanger: Story = {
  args: {
    label: 'Button label',
    severity: 'danger',
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

// Text variants
export const TextPrimary: Story = {
  args: {
    label: 'Button label',
    severity: 'primary',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const TextSecondary: Story = {
  args: {
    label: 'Button label',
    severity: 'secondary',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const TextSuccess: Story = {
  args: {
    label: 'Button Label',
    severity: 'success',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const TextInfo: Story = {
  args: {
    label: 'Button Label',
    severity: 'info',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const TextWarn: Story = {
  args: {
    label: 'Button Label',
    severity: 'warn',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const TextHelp: Story = {
  args: {
    label: 'Text Help',
    severity: 'help',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const TextDanger: Story = {
  args: {
    label: 'Text Danger',
    severity: 'danger',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

// Raised variants
export const RaisedPrimary: Story = {
  args: {
    label: 'Raised Primary',
    severity: 'primary',
    raised: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [raised]="raised"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};


// Rounded variants
export const RoundedPrimary: Story = {
  args: {
    label: 'Button Label',
    severity: 'primary',
    rounded: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedSecondary: Story = {
  args: {
    label: 'Button Label',
    severity: 'secondary',
    rounded: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedSuccess: Story = {
  args: {
    label: 'Button Label',
    severity: 'success',
    rounded: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedInfo: Story = {
  args: {
    label: 'Button Label',
    severity: 'info',
    rounded: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedWarn: Story = {
  args: {
    label: 'Button Label',
    severity: 'warn',
    rounded: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedHelp: Story = {
  args: {
    label: 'Button Label',
    severity: 'help',
    rounded: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedDanger: Story = {
  args: {
    label: 'Button Label',
    severity: 'danger',
    rounded: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

// Rounded Outlined Variants - All Severities
export const RoundedOutlinedPrimary: Story = {
  args: {
    label: 'Button Label',
    severity: 'primary',
    rounded: true,
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedOutlinedSecondary: Story = {
  args: {
    label: 'Button Label',
    severity: 'secondary',
    rounded: true,
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedOutlinedSuccess: Story = {
  args: {
    label: 'Button Label',
    severity: 'success',
    rounded: true,
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedOutlinedInfo: Story = {
  args: {
    label: 'Button Label',
    severity: 'info',
    rounded: true,
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedOutlinedWarn: Story = {
  args: {
    label: 'Button Label',
    severity: 'warn',
    rounded: true,
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedOutlinedHelp: Story = {
  args: {
    label: 'Rounded Outlined Help',
    severity: 'help',
    rounded: true,
    outlined: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedOutlinedDanger: Story = {
  args: {
    label: 'Button Label',
    severity: 'danger',
    rounded: true,
    outlined: true,
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [rounded]="rounded" [outlined]="outlined">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

// Rounded Text Variants - All Severities
export const RoundedTextPrimary: Story = {
  args: {
    label: 'Button Label',
    severity: 'primary',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedTextSecondary: Story = {
  args: {
    label: 'Button Label',
    severity: 'secondary',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedTextSuccess: Story = {
  args: {
    label: 'Button Label',
    severity: 'success',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedTextInfo: Story = {
  args: {
    label: 'Button Label',
    severity: 'info',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedTextWarn: Story = {
  args: {
    label: 'Button Label',
    severity: 'warn',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedTextHelp: Story = {
  args: {
    label: 'Button Label',
    severity: 'help',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos">
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const RoundedTextDanger: Story = {
  args: {
    label: 'Button Label',
    severity: 'danger',
    text: true,
    icon: DEFAULT_ICON,
    iconPos: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity" [text]="text" [icon]="icon" [iconPos]="iconPos" >
     <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
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
    template: `<p-button [label]="label" [severity]="severity" [size]="size"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
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
    template: `<p-button [label]="label" [severity]="severity" [size]="size"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
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
    template: `<p-button [label]="label" [severity]="severity" [disabled]="disabled"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
   
  }),
};

export const Contrast: Story = {
  args: {
    label: 'Button Label',
    severity: 'contrast',
    icon: DEFAULT_ICON,
    iconPos: 'left'
  },
  render: (args) => ({
    props: args,
    template: `<p-button [label]="label" [severity]="severity"> <fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    props: {
      defaultIcon: DEFAULT_ICON
    },
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
            <p-button label="Button label" severity="primary" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="primary" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="primary" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Secondary Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Secondary</div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="secondary" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="secondary" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="secondary" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Success Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Sucess</div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="success" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="success" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="success" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Info Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Info</div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="info" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="info" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="info" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Warn Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Warn</div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="warn" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="warn" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="warn" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Help Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Help</div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="help" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="help" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="help" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Danger Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Danger</div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="danger" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="danger" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="danger" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Contrast Light Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Contrast Light</div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="contrast" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="contrast" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" severity="contrast" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
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
            <p-button label="Button label" [rounded]="true" severity="primary" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="primary" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="primary" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Secondary Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Secondary</div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="secondary" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="secondary" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="secondary" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Success Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Success</div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="success" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="success" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="success" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Info Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Info</div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="info" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="info" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="info" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Warn Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center bg-gray-200 p-2">Warn</div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="warn" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="warn" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="warn" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Help Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Help</div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="help" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="help" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="help" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Danger Row -->
            <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Danger</div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="danger" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="danger" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="danger" [text]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
          <!-- Contrast Light Row -->
          <div class="text-center font-semibold text-gray-500 flex items-center p-2 bg-gray-200">Contrast Light</div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="contrast" [icon]="defaultIcon"><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="contrast" [outlined]="true" ><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          <div class="flex justify-center">
            <p-button label="Button label" [rounded]="true" severity="contrast" [text]="true"><fa-icon [icon]="['fas', 'check']"></fa-icon></p-button>
          </div>
          
        
    `,
   
  }),
};