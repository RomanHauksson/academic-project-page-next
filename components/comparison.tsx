"use client";

import dynamic from "next/dynamic";

const ReactCompareSlider = dynamic(
	() => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
	{
		ssr: false,
	},
);

interface ComparisonProps {
	itemOne: React.ReactNode;
	itemTwo: React.ReactNode;
}

export function Comparison({ itemOne, itemTwo }: ComparisonProps) {
	return (
		<ReactCompareSlider
			className="not-prose w-full rounded-lg"
			itemOne={itemOne}
			itemTwo={itemTwo}
		/>
	);
}
