"use client";

import {
	Children,
	isValidElement,
	type ReactNode,
	useCallback,
	useRef,
	useState,
} from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

function getFootnoteHref(children: ReactNode): string | null {
	for (const child of Children.toArray(children)) {
		if (
			isValidElement(child) &&
			(child.props as Record<string, unknown>)["data-footnote-ref"] !==
				undefined
		) {
			return (child.props as Record<string, unknown>).href as string | null;
		}
	}
	return null;
}

function getFootnoteLabel(children: ReactNode): ReactNode {
	for (const child of Children.toArray(children)) {
		if (
			isValidElement(child) &&
			(child.props as Record<string, unknown>)["data-footnote-ref"] !==
				undefined
		) {
			return (child.props as Record<string, unknown>).children as ReactNode;
		}
	}
	return null;
}

export function FootnoteRef({
	children,
	...props
}: React.ComponentProps<"sup">) {
	const href = getFootnoteHref(children);

	if (!href) {
		return <sup {...props}>{children}</sup>;
	}

	return <FootnotePopover href={href}>{children}</FootnotePopover>;
}

function FootnotePopover({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	const [contentHtml, setContentHtml] = useState<string | null>(null);
	const fetchedRef = useRef(false);
	const label = getFootnoteLabel(children);

	const populateContent = useCallback(() => {
		if (fetchedRef.current) return;
		fetchedRef.current = true;

		const id = href.replace(/^#/, "");
		const li = document.getElementById(id);
		if (!li) return;

		const clone = li.cloneNode(true) as HTMLElement;
		for (const backref of clone.querySelectorAll("[data-footnote-backref]")) {
			backref.remove();
		}
		setContentHtml(clone.innerHTML);
	}, [href]);

	return (
		<Popover>
			<PopoverTrigger
				render={<sup />}
				nativeButton={false}
				openOnHover
				delay={0}
				closeDelay={0}
				onMouseEnter={populateContent}
				onFocus={populateContent}
				className="cursor-help"
			>
				{children}
			</PopoverTrigger>
			<PopoverContent
				sideOffset={6}
				className="not-prose w-auto max-w-sm p-3 text-sm [&_p]:m-0 [&_p+p]:mt-2"
			>
				{contentHtml ? (
					<div
						// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted build-time footnote content
						dangerouslySetInnerHTML={{ __html: contentHtml }}
					/>
				) : (
					<p>Footnote {label}</p>
				)}
			</PopoverContent>
		</Popover>
	);
}
