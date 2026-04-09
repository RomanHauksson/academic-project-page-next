import type { ReactNode } from "react";

interface ColumnsProps {
	children: ReactNode;
}

export function Columns({ children }: ColumnsProps) {
	return (
		<div className="flex w-full flex-wrap items-stretch gap-4">{children}</div>
	);
}

interface ColumnProps {
	children: ReactNode;
}

export function Column({ children }: ColumnProps) {
	return (
		<div className="min-w-[16rem] flex-1 *:first:mt-0 *:last:mb-0">
			{children}
		</div>
	);
}
