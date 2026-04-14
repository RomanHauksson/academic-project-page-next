import type { ReactNode } from "react";

export function HighlightedSection({ children }: { children: ReactNode }) {
	return (
		<div className="full-bleed bg-zinc-200 py-8 dark:bg-zinc-800">
			<div className="mx-[var(--actual-inline-margin)] [&>:first-child]:mt-0 [&>:last-child]:mb-0">
				{children}
			</div>
		</div>
	);
}
