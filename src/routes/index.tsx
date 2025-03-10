import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/")({
    component: HomeComponent,
})

function HomeComponent() {
    return (
        <div className="h-screen bg-red-500">
            <Button> Home!</Button>
        </div>
    )
}
