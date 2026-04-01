export interface NoteBannerProps {
  title: string;
  description: string;
  variant?: "info" | "success" | "warning" | "danger";
}

const variantStyles = {
  info: { bg: "bg-blue-50 border-blue-200", title: "text-blue-700", text: "text-blue-600" },
  success: { bg: "bg-green-50 border-green-200", title: "text-green-700", text: "text-green-600" },
  warning: { bg: "bg-amber-50 border-amber-200", title: "text-amber-700", text: "text-amber-600" },
  danger: { bg: "bg-red-50 border-red-200", title: "text-red-700", text: "text-red-600" },
};

export const NoteBanner = ({ title, description, variant = "info" }: NoteBannerProps) => {
  const styles = variantStyles[variant];
  return (
    <div className={`flex flex-col w-full gap-1 p-3 rounded-lg border ${styles.bg}`}>
      <p className={`text-sm font-medium ${styles.title}`}>{title}</p>
      <span className={`text-sm ${styles.text}`}>{description}</span>
    </div>
  );
};
