import type { ReactNode } from "react";

interface TableProps {
	children: ReactNode;
}

export function TableWrapper({ children }: TableProps) {
	return (
		<div className="full-bleed overflow-auto px-6">
			<table className="mx-auto w-auto">{children}</table>
		</div>
	);
}
