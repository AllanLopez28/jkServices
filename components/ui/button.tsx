import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand.blue disabled:opacity-60 disabled:cursor-not-allowed ring-offset-slate-950",
  {
    variants: {
      variant: {
        primary: "bg-brand.blue hover:bg-blue-600 text-white",
        outline:
          "bg-transparent border border-slate-700 hover:bg-slate-900 text-slate-50",
        subtle: "bg-slate-900/60 hover:bg-slate-900 text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-11 px-6",
        sm: "h-9 px-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);

Button.displayName = "Button";
