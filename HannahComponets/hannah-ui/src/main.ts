import "./index.css";

// ── Core Utilities ──────────────────────────────────────────────────────────────
export { cn } from "./utils/cn";

// ── Essential Components Only ──────────────────────────────────────────────────
// This package includes only the most commonly used components.
// For specialized components, install them individually:
// npm install @hannah-ui/{component-name}

export { Button } from "./components/Button";
export { Input } from "./components/Input";
export { Card, CardHeader, CardBody, CardFooter } from "./components/Card";
export { Alert } from "./components/Alert";
export { Badge } from "./components/Badge";
export { Modal } from "./components/Modal";

// ── Types ──────────────────────────────────────────────────────────────────────
export type { ButtonProps } from "./components/Button";
export type { InputProps } from "./components/Input";
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from "./components/Card";
export type { AlertProps } from "./components/Alert";
export type { BadgeProps } from "./components/Badge";
export type { ModalProps } from "./components/Modal";