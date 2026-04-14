import type { ReactNode } from "react";

function Columns({ children }: { children: ReactNode }) {
	return (
		<div className="flex w-full flex-wrap items-stretch gap-4">{children}</div>
	);
}

function Column({ children }: { children: ReactNode }) {
	return (
		<div className="min-w-[16rem] flex-1 *:first:mt-0 *:last:mb-0">
			{children}
		</div>
	);
}

export { Columns, Column };
