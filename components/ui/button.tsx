import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold capitalize ring-offset-white transition-colors shadow-sm",

  {
    variants: {
      variant: {
        default:
          "bg-secondary text-white hover:bg-white border hover:border-secondary hover:text-secondary",
        primary: "bg-secondary text-white",
        outline:
          "border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white",
      },
      size: {
        paginationBtn: "p-4 px-6",
        default: "h-[44px] px-6",
        sm: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-base uppapercase",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
