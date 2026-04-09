import type { ReactNode } from "react";

interface WideProps {
	children: ReactNode;
}

export function Wide({ children }: WideProps) {
	return (
		<div className="mx-[calc(max(var(--minimum-inline-margin),(100cqw-100rem)/2)-var(--actual-inline-margin))]">
			{children}
		</div>
	);
}
