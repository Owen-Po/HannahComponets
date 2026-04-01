import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  ShoppingCart,
  Truck,
  CreditCard,
  CheckCircle,
  User,
  Settings,
  Rocket,
} from "lucide-react";
import { Stepper, StepperActions } from "./Stepper";
import type { StepItem } from "./Stepper";

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Multi-step wizard indicator for onboarding flows, checkout processes and form wizards.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const checkoutSteps: StepItem[] = [
  { id: "cart", label: "Cart", description: "Review items" },
  { id: "shipping", label: "Shipping", description: "Delivery address" },
  { id: "payment", label: "Payment", description: "Billing info" },
  { id: "confirm", label: "Confirmation", description: "Order summary" },
];

const onboardingSteps: StepItem[] = [
  {
    id: "profile",
    label: "Profile",
    description: "Tell us about yourself",
    content: (
      <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Full name
          <input
            type="text"
            placeholder="Jane Doe"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
          <input
            type="email"
            placeholder="jane@company.com"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </label>
      </div>
    ),
  },
  {
    id: "preferences",
    label: "Preferences",
    description: "Customize your experience",
    content: (
      <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select the topics you are interested in:
        </p>
        {["Design Systems", "React", "TypeScript", "Accessibility"].map((t) => (
          <label key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input type="checkbox" className="accent-[#7c6aff]" />
            {t}
          </label>
        ))}
      </div>
    ),
  },
  {
    id: "done",
    label: "All set!",
    description: "You are ready to go",
    content: (
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
        Your account is configured. Welcome aboard!
      </div>
    ),
  },
];

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

/** Horizontal 4-step checkout with step 2 (Payment) active. */
export const Horizontal: Story = {
  args: {
    steps: checkoutSteps,
    activeStep: 2,
    variant: "horizontal",
  },
};

/** Vertical onboarding with interactive step advancement. */
export const Vertical: Story = {
  render: () => {
    const [step, setStep] = useState(0);
    return (
      <div className="max-w-md">
        <Stepper
          steps={onboardingSteps}
          activeStep={step}
          variant="vertical"
          onStepClick={(i) => i < step && setStep(i)}
        />
        <StepperActions
          isFirst={step === 0}
          isLast={step === onboardingSteps.length - 1}
          onPrev={() => setStep((s) => Math.max(0, s - 1))}
          onNext={() =>
            setStep((s) => Math.min(onboardingSteps.length - 1, s + 1))
          }
        />
      </div>
    );
  },
};

/** Full interactive wizard with content panel. */
export const Interactive: Story = {
  render: () => {
    const wizardSteps: StepItem[] = [
      {
        id: "info",
        label: "Information",
        description: "Basic details",
        content: (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Step 1: Information
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fill in your personal information to get started.
            </p>
          </div>
        ),
      },
      {
        id: "address",
        label: "Address",
        description: "Where to ship",
        content: (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Step 2: Address
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your shipping address details.
            </p>
          </div>
        ),
      },
      {
        id: "review",
        label: "Review",
        description: "Confirm order",
        content: (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Step 3: Review
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Review your order before placing it.
            </p>
          </div>
        ),
      },
    ];

    const [step, setStep] = useState(0);
    return (
      <div className="mx-auto max-w-xl">
        <Stepper
          steps={wizardSteps}
          activeStep={step}
          onStepClick={(i) => i < step && setStep(i)}
        />
        <StepperActions
          isFirst={step === 0}
          isLast={step === wizardSteps.length - 1}
          onPrev={() => setStep((s) => Math.max(0, s - 1))}
          onNext={() =>
            setStep((s) => Math.min(wizardSteps.length - 1, s + 1))
          }
        />
      </div>
    );
  },
};

/** Small size variant. */
export const Small: Story = {
  args: {
    steps: checkoutSteps,
    activeStep: 1,
    size: "sm",
  },
};

/** Custom icons per step instead of numbers. */
export const WithIcons: Story = {
  args: {
    steps: [
      { id: "cart", label: "Cart", icon: ShoppingCart },
      { id: "shipping", label: "Shipping", icon: Truck },
      { id: "payment", label: "Payment", icon: CreditCard },
      { id: "confirm", label: "Done", icon: CheckCircle },
    ],
    activeStep: 1,
    showStepNumbers: false,
    accentColor: "#10b981",
  },
};

/** Click completed steps to go back. */
export const ClickableSteps: Story = {
  render: () => {
    const [step, setStep] = useState(2);
    return (
      <div className="mx-auto max-w-xl">
        <Stepper
          steps={checkoutSteps}
          activeStep={step}
          onStepClick={(i) => setStep(i)}
          allowClickPast={false}
        />
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Click a completed step to navigate back.
        </p>
      </div>
    );
  },
};
