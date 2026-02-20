import { forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
        // For simplicity in this project, if asChild is used (like wrapping a Link), 
        // we'll just render a span or div that acts as the accessible wrapper, 
        // or ensure the parent handles it. Usually Radix UI's Slot is used for this.

        const Comp = asChild ? 'span' : 'button';

        return (
            <Comp
                ref={ref as any}
                {...props as any}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/30': variant === 'primary',
                        'bg-white text-purple-900 border border-purple-100 hover:bg-purple-50': variant === 'secondary',
                        'border-2 border-purple-600 text-purple-600 hover:bg-purple-50': variant === 'outline',
                        'hover:bg-purple-100 text-purple-700': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    className
                )}
            >
                {children}
            </Comp>
        );
    }
);

Button.displayName = 'Button';
