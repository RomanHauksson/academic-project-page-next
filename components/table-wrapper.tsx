import type { ReactNode } from "react";

export function TableWrapper({ children }: { children: ReactNode }) {
	return (
		<div className="full-bleed overflow-auto px-6">
			<table className="mx-auto w-auto">{children}</table>
		</div>
	);
}
