import type { PropsWithChildren } from "react";

export function Figure({ children }: PropsWithChildren) {
	return <figure>{children}</figure>;
}

export function FigureContent({ children }: PropsWithChildren) {
	return <div className="flex w-full justify-center *:my-0">{children}</div>;
}

export function FigureCaption({ children }: PropsWithChildren) {
	return <figcaption className="text-center">{children}</figcaption>;
}
