import type React from "react"
import { useState, useEffect } from "react"
import { Zap, Code, Paintbrush, Lock, Layers, ArrowRight } from "lucide-react"
import Logo from "./logo"
import AnimatedButton from "./animated-button"
import Feature from "./feature"
import GlassCard from "./glass-grid"
import { Button, buttonVariants } from "./ui/button"

const HeroSection: React.FC = () => {
    // const [mounted, setMounted] = useState(false)

    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // if (!mounted) return null

    return (
        <div className="relative mx-auto flex min-h-screen flex-col overflow-hidden px-4 sm:px-6">
            {/* Background gradient blur */}
            <div className="-z-10 absolute inset-0 overflow-hidden">
                <div className="-left-[30%] -z-10 absolute top-0 h-[600px] w-[600px] animate-pulse-subtle rounded-full bg-primary/20 blur-[120px]" />
                <div
                    className="-right-[20%] -z-10 absolute bottom-0 h-[600px] w-[600px] animate-pulse-subtle rounded-full bg-blue-400/20 blur-[120px]"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            {/* Hero content */}
            <main className="container mx-auto flex flex-1 flex-col items-center justify-center pt-16 sm:pt-24">
                <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full bg-accent px-4 py-2 font-medium text-primary text-sm">
                    <Zap className="h-4 w-4" />
                    <span>Modern React Boilerplate</span>
                </div>

                {/* Logo added below the Modern React Boilerplate text */}
                <div className="my-6 flex animate-fade-in-delayed justify-center">
                    <Logo className="scale-150" />
                </div>

                <h1 className="mb-4 max-w-3xl animate-fade-in-delayed text-balance text-center font-bold font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
                    React + Tailwind + RSBuild Boilerplate
                </h1>

                <p className="mb-10 max-w-xl animate-fade-in-long-delayed text-balance text-center text-muted-foreground text-xl">
                    A minimal, high-performance React boilerplate featuring
                    modern tooling and lightning-fast development.
                </p>

                <div className="mb-20 flex animate-fade-in-long-delayed flex-col gap-4 sm:flex-row">
                    <a
                        href="https://github.com/mohmmedraad/TanStacked"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                            size: "lg",
                            className: "group",
                        })}
                    >
                        View on GitHub
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-2" />
                    </a>
                </div>

                {/* Features grid */}
                <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
                    <Feature
                        image={
                            <div>
                                <img
                                    src="/imgs/rspack-logo.png"
                                    alt="RSBuild logo"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        }
                        title="Blazing Fast"
                        description="Optimized for performance with RSBuild"
                        delay="none"
                        className="lg:col-span-3"
                    />
                    <Feature
                        image={
                            <div>
                                <img
                                    src="/imgs/react-logo.png"
                                    alt="React logo"
                                    width={60}
                                    height={60}
                                    className="block lg:mx-auto"
                                />
                            </div>
                        }
                        title="React 19"
                        description="Built with the latest React for optimal performance and efficiency."
                        delay="short"
                        className="lg:col-span-6 lg:col-start-4 lg:text-center"
                    />
                    <Feature
                        image={
                            <div>
                                <img
                                    src="/imgs/tailwindcss-logo.png"
                                    alt="Tailwind logo"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        }
                        title="Tailwind CSS v4"
                        description="Fully styled with utility-first CSS"
                        delay="medium"
                        className="lg:col-span-3 lg:col-start-10"
                    />
                    <Feature
                        image={
                            <div>
                                <img
                                    src="/imgs/ts-logo.png"
                                    alt="TypeScript logo"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        }
                        title="TypeScript"
                        description="Fully typed for safety and productivity"
                        delay="none"
                        className="lg:col-span-4"
                    />
                    <Feature
                        image={
                            <div>
                                <img
                                    src="/imgs/shadcn-logo.png"
                                    alt="ShadCN/UI logo"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        }
                        title="ShadCN/UI"
                        description="Beautifully designed components"
                        delay="short"
                        className="lg:col-span-4 lg:col-start-9"
                    />
                    <Feature
                        image={
                            <div>
                                <img
                                    src="/imgs/biome-logo.webp"
                                    alt="Biome logo"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        }
                        title="Biome"
                        description="For formatting & linting clean code"
                        delay="medium"
                        className="lg:col-span-4 lg:col-start-5 lg:row-start-2"
                    />
                </div>

                {/* Code preview */}
                <GlassCard className="mt-20 w-full max-w-3xl animate-scale-in overflow-hidden text-left">
                    <div className="flex items-center gap-2 bg-black/90 px-4 py-2 text-white">
                        <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <span className="ml-2 text-gray-400 text-xs">
                            terminal
                        </span>
                    </div>
                    <div className="overflow-x-auto bg-black/90 p-4 font-mono text-sm text-white">
                        <p className="text-gray-400">
                            $ # Clone the repository and install dependencies
                        </p>
                        <p className="text-green-300">
                            $ git clone
                            https://github.com/mohmmedraad/TanStacked && cd
                            TanStacked && pnpm install
                        </p>
                        <p className="mt-2 text-gray-400">
                            $ # Start the development server
                        </p>
                        <p className="text-green-300">$ pnpm dev</p>
                        <div className="mt-2 flex items-center">
                            <span className="text-green-300">$</span>
                            <span className="ml-2 h-4 w-2 animate-pulse bg-white" />
                        </div>
                    </div>
                </GlassCard>
            </main>

            {/* Footer */}
            <footer className="animate-fade-in py-6 text-center text-muted-foreground text-sm">
                Crafted for speed and simplicity. Built on modern web
                technologies.
            </footer>
        </div>
    )
}

export default HeroSection
