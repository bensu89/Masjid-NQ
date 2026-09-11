import React from "react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
}

export function Alert({ className = "", variant = "info", children, ...props }: AlertProps) {
  const variants = {
    success: "border-green-500 bg-green-50 text-green-700",
    error: "border-red-500 bg-red-50 text-red-700",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-700",
    info: "border-blue-500 bg-blue-50 text-blue-700",
  };

  return (
    <div className={`rounded-md border-l-4 p-4 text-sm ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}