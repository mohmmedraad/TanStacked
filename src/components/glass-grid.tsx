import { cn } from "@/lib/utils"

interface GlassCardProps {
    children: React.ReactNode
    className?: string
    variant?: "light" | "dark"
}

const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className,
    variant = "light",
}) => {
    return (
        <div
            className={cn(
                "overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500",
                variant === "light" ? "glass" : "glass-dark",
                className
            )}
        >
            {children}
        </div>
    )
}

export default GlassCard
