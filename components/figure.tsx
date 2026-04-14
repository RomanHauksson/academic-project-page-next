import type { PropsWithChildren } from "react";

function Figure({ children }: PropsWithChildren) {
	return <figure>{children}</figure>;
}

function FigureContent({ children }: PropsWithChildren) {
	return <div className="flex w-full justify-center *:my-0">{children}</div>;
}

function FigureCaption({ children }: PropsWithChildren) {
	return <figcaption className="text-center">{children}</figcaption>;
}

export { Figure, FigureContent, FigureCaption };
