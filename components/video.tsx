import type { VideoHTMLAttributes } from "react";

export function Video({
	controls = true,
	playsInline = true,
	...props
}: VideoHTMLAttributes<HTMLVideoElement> & { src: string }) {
	return (
		<video
			className="aspect-video h-auto w-full rounded-lg"
			controls={controls}
			playsInline={playsInline}
			{...props}
		/>
	);
}
