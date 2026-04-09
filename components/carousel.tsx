"use client";

import { cn } from "@/lib/utils";
import { Children, type ReactNode, useEffect, useRef, useState } from "react";

interface CarouselProps {
	children: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);
	const slides = Children.toArray(children);
	const numSlides = slides.length;

	const goToSlide = (index: number) => {
		if (index < 0 || index >= numSlides) return;

		const slideElements =
			carouselRef.current?.querySelectorAll(".slide-viewport");
		if (slideElements && slideElements[index]) {
			slideElements[index].scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start",
			});
		}
		setCurrentIndex(index);
	};

	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntries = entries.filter((entry) => entry.isIntersecting);
				if (visibleEntries.length === 0) return;

				const mostVisible = visibleEntries.reduce((prev, current) =>
					current.intersectionRatio > prev.intersectionRatio ? current : prev,
				);

				const target = mostVisible.target as HTMLElement;
				const index = Number(target.dataset.index ?? "-1");
				if (!Number.isNaN(index) && index >= 0) {
					setCurrentIndex(index);
				}
			},
			{
				root: carousel,
				threshold: 0.5,
			},
		);

		const slideElements = carousel.querySelectorAll(".slide-viewport");
		slideElements.forEach((slide) => {
			observer.observe(slide);
		});

		return () => observer.disconnect();
	}, [children]);

	return (
		<div className="carousel-wrapper">
			<div className="not-prose my-4 flex items-center justify-center">
				<button
					className="group h-[3rem] w-[3rem] cursor-pointer flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
					type="button"
					disabled={currentIndex === 0}
					onClick={() => goToSlide(currentIndex - 1)}
				>
					<span className="icon-[ri--arrow-drop-left-line] h-8 w-8 group-hover:group-not-disabled:scale-140 transition dark:text-zinc-200" />
				</button>
				<div className="flex">
					{slides.map((_, index) => (
						<button
							key={index}
							className={`group h-[3rem] w-[3rem] cursor-pointer content-center ${
								index === currentIndex ? "active" : ""
							}`}
							type="button"
							onClick={() => goToSlide(index)}
						>
							<div
								className={cn(
									"mx-auto group-hover:group-not-disabled:scale-140 h-[0.5rem] w-[0.5rem] rounded-full bg-black transition dark:bg-zinc-200",
									index === currentIndex &&
										"scale-[1.4] bg-orange-600 dark:bg-orange-300",
								)}
							/>
						</button>
					))}
				</div>
				<button
					className="next-button h-[3rem] w-[3rem] cursor-pointer flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 group"
					type="button"
					disabled={currentIndex === numSlides - 1}
					onClick={() => goToSlide(currentIndex + 1)}
				>
					<span className="icon-[ri--arrow-drop-right-line] h-8 w-8 group-hover:group-not-disabled:scale-140 transition dark:text-zinc-200" />
				</button>
			</div>
			<div className="carousel-viewport mx-[calc(var(--slide-gap)/-2)] w-[calc(var(--actual-text-width)+var(--slide-gap))]">
				<div
					ref={carouselRef}
					className="carousel mx-[calc(var(--actual-inline-margin)*-1+var(--slide-gap)/2)] flex snap-x snap-mandatory scroll-pl-[calc(var(--actual-inline-margin)-var(--slide-gap)/2)] overflow-scroll px-[var(--actual-inline-margin)] [scrollbar-width:none]"
				>
					{slides.map((child, index) => (
						<div
							key={index}
							data-index={index}
							className="slide-viewport snap-start px-[calc(var(--slide-gap)/2)]"
						>
							<div className="slide w-[var(--actual-text-width)] *:my-0">
								{child}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
