export function Header({ children }: { children: React.ReactNode }) {
	return (
		<header className="flex flex-col gap-6 mx-auto mb-12 max-w-[50rem] px-6 text-center">
			{children}
		</header>
	);
}

export function Title({ children }: { children: React.ReactNode }) {
	return <h1 className="text-5xl font-medium">{children}</h1>;
}

export function Authors({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4">
			{children}
		</div>
	);
}

export function Author({
	children,
	institution,
	url,
	notes,
}: {
	children: React.ReactNode;
	institution?: string;
	url?: string;
	notes?: string[];
}) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className="flex flex-row text-xl">
				{url ? <a href={url}>{children}</a> : <span>{children}</span>}
				{notes && (
					<sup className="text-xl">
						{notes.map(
							(note, index, array) =>
								note + (index < array.length - 1 ? "," : ""),
						)}
					</sup>
				)}
			</div>
			{institution && <div>{institution}</div>}
		</div>
	);
}

export function Links({ children }: { children: React.ReactNode }) {
	return (
		<div className="not-prose flex flex-row flex-wrap justify-center gap-2">
			{children}
		</div>
	);
}

export function Link({
	children,
	url,
	icon,
}: {
	children: React.ReactNode;
	url: string;
	icon?: React.ReactNode;
}) {
	return (
		<a
			href={url}
			className="flex flex-row items-center gap-2 rounded-full bg-zinc-800 px-5 py-2 text-lg text-white hover:bg-black hover:no-underline dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-50"
		>
			{icon}
			<span>{children}</span>
		</a>
	);
}

export function Conference({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

type Note = {
	symbol: string;
	text: string;
};

export function Notes({ notes }: { notes: Note[] }) {
	return (
		<div className="text-center text-sm">
			{notes.map((note, index, array) => (
				<span key={note.symbol}>
					<sup>{note.symbol}</sup>
					{note.text}
					{index < array.length - 1 ? ", " : ""}
				</span>
			))}
		</div>
	);
}
