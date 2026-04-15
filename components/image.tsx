"use client";

import NextImage from "next/image";
import type { ComponentProps } from "react";
import Zoom from "react-medium-image-zoom";
import { cn } from "@/lib/utils";
import "react-medium-image-zoom/dist/styles.css";

export function Image({
	className,
	...props
}: ComponentProps<typeof NextImage>) {
	return (
		<Zoom classDialog="not-prose" ZoomContent={({ img }) => <>{img}</>}>
			<NextImage
				className={cn("rounded-lg max-w-full mx-auto not-prose", className)}
				{...props}
			/>
		</Zoom>
	);
}
