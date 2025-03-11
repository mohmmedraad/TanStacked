import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-blue-400 shadow-lg">
                <div className="h-4 w-4 translate-x-[0px] translate-y-[-1px] rotate-45 transform rounded-sm bg-white" />
            </div>
            <span className="font-display font-medium text-xl tracking-tight">
                TanStacked
            </span>
        </div>
    )
}

export default Logo
