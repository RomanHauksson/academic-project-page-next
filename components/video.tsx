import type { VideoHTMLAttributes } from "react";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
	src: string;
}

export function Video({
	controls = true,
	playsInline = true,
	...props
}: VideoProps) {
	return (
		<video
			className="aspect-video h-auto w-full rounded-lg"
			controls={controls}
			playsInline={playsInline}
			{...props}
		/>
	);
}
