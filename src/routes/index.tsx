import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="bg-red-500 h-screen">
			<Button> Home!</Button>
		</div>
	);
}
