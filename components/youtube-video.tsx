interface YouTubeVideoProps {
	videoId: string;
	aspectRatio?: number;
}

export function YouTubeVideo({
	videoId,
	aspectRatio = 16 / 9,
}: YouTubeVideoProps) {
	return (
		<div className="w-full overflow-hidden rounded-lg" style={{ aspectRatio }}>
			<iframe
				className="h-full w-full"
				loading="lazy"
				src={`https://www.youtube-nocookie.com/embed/${videoId}`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				referrerPolicy="strict-origin-when-cross-origin"
			/>
		</div>
	);
}
