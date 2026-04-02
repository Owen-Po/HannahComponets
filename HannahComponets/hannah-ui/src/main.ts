import "./index.css";

// ── Core Utilities ──────────────────────────────────────────────────────────────
export { cn } from "./utils/cn";

// ── Essential Components Only ──────────────────────────────────────────────────
// This package includes only the most commonly used components.
// For specialized components, install them individually:
// npm install @hannah-ui/{component-name}

export { Button } from "@hannah-ui/button";
export { Input } from "@hannah-ui/input";
export { Card, CardHeader, CardBody, CardFooter } from "@hannah-ui/card";
export { Alert } from "@hannah-ui/alert";
export { Badge } from "@hannah-ui/badge";
export { Modal } from "@hannah-ui/modal";

// ── Types ──────────────────────────────────────────────────────────────────────
export type { ButtonProps } from "@hannah-ui/button";
export type { InputProps } from "@hannah-ui/input";
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from "@hannah-ui/card";
export type { AlertProps } from "@hannah-ui/alert";
export type { BadgeProps } from "@hannah-ui/badge";
export type { ModalProps } from "@hannah-ui/modal";