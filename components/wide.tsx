import type { ReactNode } from "react";

export function Wide({ children }: { children: ReactNode }) {
	return (
		<div className="mx-[calc(max(var(--minimum-inline-margin),(100cqw-100rem)/2)-var(--actual-inline-margin))]">
			{children}
		</div>
	);
}
