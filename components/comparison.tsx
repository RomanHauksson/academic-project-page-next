"use client";

import dynamic from "next/dynamic";

const ReactCompareSlider = dynamic(
	() => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
	{
		ssr: false,
	},
);

export function Comparison({
	itemOne,
	itemTwo,
}: {
	itemOne: React.ReactNode;
	itemTwo: React.ReactNode;
}) {
	return (
		<ReactCompareSlider
			className="not-prose w-full rounded-lg"
			itemOne={itemOne}
			itemTwo={itemTwo}
		/>
	);
}
