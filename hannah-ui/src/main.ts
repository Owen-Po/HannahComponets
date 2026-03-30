import "./index.css";

// ── Utilities ──────────────────────────────────────────────────────────────
export { cn } from "./utils/cn";

// ── Components ─────────────────────────────────────────────────────────────
export { Button } from "./components/Button";
export { Header } from "./components/Header";
export { Sidebar } from "./components/Sidebar";
export { Login } from "./components/Login";
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
export { Breadcrumb } from "./components/Breadcrumb";
export { Pagination } from "./components/Pagination";
export { StatsCard } from "./components/StatsCard";
export { Register } from "./components/Register";
export { Chip } from "./components/Chip";
export { Toggle } from "./components/Toggle";
export { PaymentMethodCard, PaymentForm } from "./components/PaymentMethodCard";
export { InteractiveCreditCard, CreditCardForm, detectCardBrand, formatCardNumber } from "./components/InteractiveCreditCard";
export { FilterSelect, FilterSearch, FilterDate, FilterDateRange, FilterChips, FilterBar, FilterButton } from "./components/Filter";

// ── New Components (ported from BDApp) ──────────────────────────────────────
export { DraggableTable, useTableStore } from "./components/DraggableTable";
export { FilterPanel } from "./components/FilterPanel";
export { AdvancedTableFilter } from "./components/AdvancedTableFilter";
export { AppSelect } from "./components/AppSelect";
export { FileDropzone } from "./components/FileDropzone";
export { DatePicker } from "./components/DatePicker";
export { PhoneInput } from "./components/PhoneInput";
export { ColorPicker } from "./components/ColorPicker";
export { KPICard } from "./components/KPICard";
export { ConfirmModal } from "./components/ConfirmModal";
export { ExportModal } from "./components/ExportModal";
export { PageTabs } from "./components/PageTabs";
export { ExpandableTable } from "./components/ExpandableTable";
export { StickyTable } from "./components/StickyTable";
export { SimpleTable } from "./components/SimpleTable";
export { Switch } from "./components/Switch";
export { HelpModal, HelpList, HelpParagraph, HelpHighlight, HelpKeyboard } from "./components/HelpModal";
export { NoteBanner } from "./components/NoteBanner";
export { ErrorMessage } from "./components/ErrorMessage";
export { SearchableSelect } from "./components/SearchableSelect";
export { Navbar } from "./components/Navbar";
export { ModernSidebar } from "./components/ModernSidebar";
export { Dock } from "./components/Dock";
export { CommandPalette } from "./components/CommandPalette";
export { EmptyState } from "./components/EmptyState";
export { Tooltip } from "./components/Tooltip";
export { Timeline } from "./components/Timeline";
export { Skeleton, SkeletonGroup } from "./components/Skeleton";
export { Stepper, StepperActions } from "./components/Stepper";
export { DropdownMenu } from "./components/DropdownMenu";
export { CopyBlock } from "./components/CopyBlock";
export { PricingCard } from "./components/PricingCard";
export { Divider } from "./components/Divider";
export { Kbd } from "./components/Kbd";
export { ProductCard } from "./components/ProductCard";
export { CartItem } from "./components/CartItem";
export { CartSummary } from "./components/CartSummary";
export { CategoryShowcase } from "./components/CategoryShowcase";
export { PromoBanner } from "./components/PromoBanner";
export { ProductQuickView } from "./components/ProductQuickView";
export { ReviewCard } from "./components/ReviewCard";
export { QuantitySelector } from "./components/QuantitySelector";
export { WishlistButton } from "./components/WishlistButton";
export { DataGrid } from "./components/DataGrid";
export { KanbanBoard } from "./components/KanbanBoard";
export { StatusFlow } from "./components/StatusFlow";
export { MetricCard } from "./components/MetricCard";
export { InlineEdit } from "./components/InlineEdit";
export { UserStack } from "./components/UserStack";

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
export type { BreadcrumbProps, BreadcrumbItem as BreadcrumbItemType } from "./components/Breadcrumb";
export type { PaginationProps } from "./components/Pagination";
export type { StatsCardProps, StatsCardTrend } from "./components/StatsCard";
export type { RegisterProps, RegisterData, RegisterValidationRules, RegisterLink, RegisterSocialProvider } from "./components/Register";
export type { ChipProps } from "./components/Chip";
export type { ToggleProps } from "./components/Toggle";
export type { PaymentMethodCardProps, PaymentType, PaymentFormProps } from "./components/PaymentMethodCard";
export type { InteractiveCreditCardProps, CardBrand, CardBank, CreditCardFormProps } from "./components/InteractiveCreditCard";
export type { FilterOption, FilterSelectProps, FilterSearchProps, FilterDateProps, FilterDateRangeProps, FilterChipsProps, FilterBarProps, FilterButtonProps } from "./components/Filter";

// ── New Component Types ─────────────────────────────────────────────────────
export type { DraggableTableProps } from "./components/DraggableTable";
export type { FilterPanelProps } from "./components/FilterPanel";
export type { AdvancedTableFilterProps, FilterState } from "./components/AdvancedTableFilter";
export type { SelectOption as AppSelectOption } from "./components/AppSelect";
export type { FileDropzoneProps } from "./components/FileDropzone";
export type { DatePickerProps } from "./components/DatePicker";
export type { PhoneInputProps } from "./components/PhoneInput";
export type { ColorPickerProps } from "./components/ColorPicker";
export type { KPICardProps } from "./components/KPICard";
export type { ConfirmModalProps } from "./components/ConfirmModal";
export type { ExportModalProps, ExportFormat } from "./components/ExportModal";
export type { PageTabsProps, PageTab } from "./components/PageTabs";
export type { ExpandableTableProps } from "./components/ExpandableTable";
export type { StickyTableProps } from "./components/StickyTable";
export type { SimpleTableProps } from "./components/SimpleTable";
export type { SwitchProps } from "./components/Switch";
export type { HelpModalProps, HelpSection } from "./components/HelpModal";
export type { NoteBannerProps } from "./components/NoteBanner";
export type { ErrorMessageProps } from "./components/ErrorMessage";
export type { SearchableSelectProps, SearchableSelectOption } from "./components/SearchableSelect";
export type { NavbarProps, NavbarLink } from "./components/Navbar";
export type { ModernSidebarProps, SidebarSection, SidebarItem as ModernSidebarItem } from "./components/ModernSidebar";
export type { DockProps, DockItem } from "./components/Dock";
export type { CommandPaletteProps, CommandGroup, Command } from "./components/CommandPalette";
export type { EmptyStateProps } from "./components/EmptyState";
export type { TooltipProps } from "./components/Tooltip";
export type { TimelineProps, TimelineItem } from "./components/Timeline";
export type { SkeletonProps } from "./components/Skeleton";
export type { StepperProps, StepItem } from "./components/Stepper";
export type { DropdownMenuProps, DropdownItem as DropdownMenuItem } from "./components/DropdownMenu";
export type { CopyBlockProps } from "./components/CopyBlock";
export type { PricingCardProps, PricingFeature } from "./components/PricingCard";
export type { DividerProps } from "./components/Divider";
export type { KbdProps } from "./components/Kbd";
export type { ProductCardProps } from "./components/ProductCard";
export type { CartItemProps } from "./components/CartItem";
export type { CartSummaryProps } from "./components/CartSummary";
export type { CategoryShowcaseProps, CategoryItem } from "./components/CategoryShowcase";
export type { PromoBannerProps } from "./components/PromoBanner";
export type { ProductQuickViewProps, ProductVariant } from "./components/ProductQuickView";
export type { ReviewCardProps } from "./components/ReviewCard";
export type { QuantitySelectorProps } from "./components/QuantitySelector";
export type { WishlistButtonProps } from "./components/WishlistButton";
export type { DataGridProps, DataGridColumn } from "./components/DataGrid";
export type { KanbanBoardProps, KanbanColumn, KanbanCard } from "./components/KanbanBoard";
export type { StatusFlowProps, FlowStage } from "./components/StatusFlow";
export type { MetricCardProps } from "./components/MetricCard";
export type { InlineEditProps } from "./components/InlineEdit";
export type { UserStackProps, StackUser } from "./components/UserStack";
