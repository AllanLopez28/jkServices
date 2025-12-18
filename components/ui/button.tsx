import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-2xl",
    "text-sm font-bold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    "ring-offset-white"
  ].join(" "),
  {
    variants: {
      variant: {
        // ✅ Use your real tokens
        primary:
          "bg-brand-primary text-white hover:bg-brand-primaryDark",

        // ✅ Visible on white backgrounds
        outline:
          "bg-white text-brand-primaryDark border border-brand-primary/40 hover:bg-brand-primaryLight",

        // ✅ For dark sections (keep if you use it)
        subtle:
          "bg-slate-900/60 text-slate-50 hover:bg-slate-900"
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
      className={twMerge(
        buttonVariants({ variant, size }),
        "focus-visible:ring-brand-primary",
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";
