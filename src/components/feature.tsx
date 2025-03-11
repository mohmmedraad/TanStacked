import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { JSX } from "react"

interface FeatureProps {
    image: JSX.Element
    title: string
    description: string
    className?: string
    delay?: "none" | "short" | "medium" | "long"
}

const Feature: React.FC<FeatureProps> = ({
    image,
    title,
    description,
    className,
    delay = "none",
}) => {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl p-4 transition-shadow duration-200 ease-in hover:shadow-2xl",
                // light styles
                "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                className
            )}
        >
            {image}
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            </div> */}
            <h3 className="mt-3 font-medium text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    )
}

export default Feature
