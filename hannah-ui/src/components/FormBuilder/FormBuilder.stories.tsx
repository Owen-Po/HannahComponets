import type { Meta, StoryObj } from "@storybook/react";
import { FormBuilder } from "./FormBuilder";
import type { FormField } from "./FormBuilder";

const meta: Meta<typeof FormBuilder> = {
  title: "Components/FormBuilder",
  component: FormBuilder,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

// ─── Contact Form (simple) ───────────────────────────────────────────────────

const contactFields: FormField[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "John Doe",
    required: true,
    colSpan: 2,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "john@example.com",
    required: true,
    rules: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
  },
  {
    name: "message",
    type: "textarea",
    label: "Message",
    placeholder: "How can we help you?",
    colSpan: 2,
    rows: 5,
    rules: { maxLength: 500 },
  },
];

export const ContactForm: Story = {
  args: {
    fields: contactFields,
    columns: 1,
    variant: "card",
    submitLabel: "Send Message",
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
};

// ─── Employee Onboarding (multi-step) ────────────────────────────────────────

const onboardingFields: FormField[] = [
  // Step 1
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "Jane",
    required: true,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Smith",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "jane.smith@company.com",
    required: true,
    rules: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email",
      },
    },
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone",
    placeholder: "+1 (555) 000-0000",
  },
  {
    name: "dateOfBirth",
    type: "date",
    label: "Date of Birth",
    required: true,
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
  // Step 2
  {
    name: "department",
    type: "select",
    label: "Department",
    required: true,
    options: [
      { label: "Engineering", value: "engineering" },
      { label: "Design", value: "design" },
      { label: "Marketing", value: "marketing" },
      { label: "Sales", value: "sales" },
      { label: "HR", value: "hr" },
    ],
  },
  {
    name: "role",
    type: "text",
    label: "Job Title",
    placeholder: "Senior Software Engineer",
    required: true,
  },
  {
    name: "startDate",
    type: "date",
    label: "Start Date",
    required: true,
  },
  {
    name: "salary",
    type: "number",
    label: "Annual Salary (USD)",
    placeholder: "85000",
    rules: { min: 0 },
  },
  {
    name: "employmentType",
    type: "radio",
    label: "Employment Type",
    required: true,
    colSpan: 2,
    options: [
      { label: "Full-time", value: "full-time" },
      { label: "Part-time", value: "part-time" },
      { label: "Contract", value: "contract" },
    ],
  },
  // Step 3
  {
    name: "systemAccess",
    type: "toggle",
    label: "Enable System Access",
    colSpan: 2,
  },
  {
    name: "accessLevel",
    type: "select",
    label: "Access Level",
    showWhen: { field: "systemAccess", value: true },
    options: [
      { label: "Admin", value: "admin" },
      { label: "Editor", value: "editor" },
      { label: "Viewer", value: "viewer" },
    ],
  },
  {
    name: "bio",
    type: "textarea",
    label: "Short Bio",
    placeholder: "Tell us a bit about yourself...",
    colSpan: 2,
    rows: 3,
    rules: { maxLength: 300 },
  },
  {
    name: "profilePhoto",
    type: "file",
    label: "Profile Photo",
    accept: "image/*",
    colSpan: 2,
  },
];

export const EmployeeOnboarding: Story = {
  args: {
    fields: onboardingFields,
    variant: "card",
    columns: 2,
    submitLabel: "Complete Onboarding",
    accentColor: "#6366f1",
    steps: [
      {
        label: "Personal Info",
        fields: [
          "firstName",
          "lastName",
          "email",
          "phone",
          "dateOfBirth",
          "gender",
        ],
      },
      {
        label: "Employment",
        fields: [
          "department",
          "role",
          "startDate",
          "salary",
          "employmentType",
        ],
      },
      {
        label: "Access & Preferences",
        fields: ["systemAccess", "accessLevel", "bio", "profilePhoto"],
      },
    ],
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 1500));
      alert("Onboarding complete!\n\n" + JSON.stringify(values, null, 2));
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
};

// ─── Conditional Fields ──────────────────────────────────────────────────────

const conditionalFields: FormField[] = [
  {
    name: "name",
    type: "text",
    label: "Your Name",
    placeholder: "Jane Doe",
    required: true,
    colSpan: 2,
  },
  {
    name: "hasCompany",
    type: "toggle",
    label: "I represent a company",
    colSpan: 2,
  },
  {
    name: "companyName",
    type: "text",
    label: "Company Name",
    placeholder: "Acme Inc.",
    required: true,
    showWhen: { field: "hasCompany", value: true },
  },
  {
    name: "companySize",
    type: "select",
    label: "Company Size",
    showWhen: { field: "hasCompany", value: true },
    options: [
      { label: "1-10 employees", value: "1-10" },
      { label: "11-50 employees", value: "11-50" },
      { label: "51-200 employees", value: "51-200" },
      { label: "201+ employees", value: "201+" },
    ],
  },
];

export const ConditionalFields: Story = {
  args: {
    fields: conditionalFields,
    variant: "card",
    columns: 2,
    submitLabel: "Continue",
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 520 }}>
        <Story />
      </div>
    ),
  ],
};

// ─── Minimal (login) ─────────────────────────────────────────────────────────

const minimalFields: FormField[] = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "you@example.com",
    required: true,
    colSpan: 2,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    required: true,
    colSpan: 2,
    rules: { minLength: 8 },
  },
];

export const Minimal: Story = {
  args: {
    fields: minimalFields,
    variant: "minimal",
    columns: 1,
    submitLabel: "Sign In",
    accentColor: "#0ea5e9",
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
};

// ─── Validation ──────────────────────────────────────────────────────────────

const validationFields: FormField[] = [
  {
    name: "heading",
    type: "heading",
    label: "Validation Demo",
    content: "Validation Demo",
    description: "Try submitting with empty or invalid values",
    colSpan: 2,
  },
  {
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "At least 3 characters",
    required: true,
    rules: { minLength: 3 },
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "must be valid",
    required: true,
    rules: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  {
    name: "divider1",
    type: "divider",
    colSpan: 2,
  },
  {
    name: "age",
    type: "number",
    label: "Age",
    placeholder: "18-120",
    required: true,
    rules: { min: 18, max: 120 },
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Min 8 chars",
    required: true,
    rules: { minLength: 8 },
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Must match password",
    required: true,
    colSpan: 2,
    rules: {
      custom: (value, all) =>
        value !== all.password ? "Passwords do not match" : null,
    },
  },
];

export const Validation: Story = {
  args: {
    fields: validationFields,
    variant: "card",
    columns: 2,
    submitLabel: "Create Account",
    showReset: true,
    onSubmit: (values) => {
      alert("All valid!\n\n" + JSON.stringify(values, null, 2));
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 560 }}>
        <Story />
      </div>
    ),
  ],
};
