import { cn } from "@/lib/utils"

interface AnimatedButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "outline"
    size?: "sm" | "md" | "lg"
    className?: string
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) => {
    const baseStyles =
        "relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden rounded-lg hover:shadow-md active:scale-[0.98]"

    const variantStyles = {
        primary: "text-white bg-primary hover:bg-primary/90",
        secondary: "text-foreground bg-secondary hover:bg-secondary/80",
        outline:
            "text-foreground bg-transparent border border-border hover:bg-secondary/50",
    }

    const sizeStyles = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-2.5",
    }

    return (
        <button
            className={cn(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
            {...props}
        >
            <span className="z-10 flex items-center gap-2">{children}</span>
            <div className="absolute inset-0 h-full w-full translate-y-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
        </button>
    )
}

export default AnimatedButton
