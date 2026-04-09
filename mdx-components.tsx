import type { MDXComponents } from "mdx/types";
import { Carousel } from "@/components/carousel";
import { Comparison } from "@/components/comparison";
import { Figure, FigureCaption, FigureContent } from "@/components/figure";
import {
	Author,
	Authors,
	Conference,
	Header,
	Link,
	Links,
	Notes,
	Title,
} from "@/components/header";
import { HighlightedSection } from "@/components/highlighted-section";
import { Image } from "@/components/image";
import { SmallCaps } from "@/components/small-caps";
import { TableWrapper } from "@/components/table-wrapper";
import { Column, Columns } from "@/components/columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video } from "@/components/video";
import { Wide } from "@/components/wide";
import { YouTubeVideo } from "@/components/youtube-video";

export const components = {
	Header,
	Title,
	Authors,
	Author,
	Conference,
	Notes,
	Links,
	Link,
	SmallCaps,
	Image,
	Video,
	YouTubeVideo,
	Figure,
	FigureContent,
	FigureCaption,
	HighlightedSection,
	Wide,
	Columns,
	Column,
	Carousel,
	Comparison,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	table: TableWrapper,
} satisfies MDXComponents;

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXComponents {
	return components;
}
