import "./index.css";

// ── Utilities ──────────────────────────────────────────────────────────────
export { cn } from "./utils/cn";

// ── Components ─────────────────────────────────────────────────────────────
export { Button } from "./components/Button";
export { Header } from "./components/Header";
export { Sidebar } from "./components/Sidebar";
export { Login } from "./components/Login";
export { Stack } from "./components/Stack";
export { Form, FormGroup, FormDivider } from "./components/Form";
export { Input } from "./components/Input";
export { Textarea } from "./components/Textarea";
export { Select } from "./components/Select";
export { Checkbox } from "./components/Checkbox";
export { Radio, RadioGroup } from "./components/Radio";
export { Badge } from "./components/Badge";
export { Card, CardHeader, CardBody, CardFooter } from "./components/Card";
export { Table, Th, Td } from "./components/Table";
export { Alert } from "./components/Alert";
export { Modal } from "./components/Modal";
export { Tabs } from "./components/Tabs";
export { Avatar, AvatarGroup } from "./components/Avatar";
export { ToastProvider, useToast } from "./components/Toast";

// ── Templates ──────────────────────────────────────────────────────────────────
export { AuthProvider, useAuth } from "./templates/AuthContext";
export { SidebarProvider, useSidebar } from "./templates/SidebarContext";
export { moduleCategories } from "./templates/modulos";
export { ProtectedRoute } from "./templates/ProtectedRoute";
export { AppSidebar } from "./templates/AppSidebar";
export { DashboardLayout } from "./templates/DashboardLayout";

// ── Template Types ──────────────────────────────────────────────────────────────────
export type { User } from "./templates/AuthContext";
export type { Module, ModuleCategory } from "./templates/modulos";

// ── Types ──────────────────────────────────────────────────────────────────
export type { ButtonProps } from "./components/Button";
export type { HeaderProps, BreadcrumbItem } from "./components/Header";
export type {
  SidebarProps,
  SidebarCategory,
  SidebarModule,
} from "./components/Sidebar";
export type {
  LoginProps,
  LoginCredentials,
  LoginValidationRules,
  LoginLink,
  SocialProvider,
} from "./components/Login";
export type { FormProps, FormGroupProps, FormDividerProps } from "./components/Form";
export type { InputProps } from "./components/Input";
export type { TextareaProps } from "./components/Textarea";
export type { SelectProps, SelectOption } from "./components/Select";
export type { CheckboxProps } from "./components/Checkbox";
export type { RadioProps, RadioGroupProps, RadioOption } from "./components/Radio";
export type { BadgeProps } from "./components/Badge";
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from "./components/Card";
export type { TableProps, Column } from "./components/Table";
export type { AlertProps } from "./components/Alert";
export type { ModalProps } from "./components/Modal";
export type { TabsProps, TabItem } from "./components/Tabs";
export type { AvatarProps, AvatarGroupProps } from "./components/Avatar";
export type { ToastOptions, ToastVariant, ToastPosition, ToastAction, ToastContextValue } from "./components/Toast";
