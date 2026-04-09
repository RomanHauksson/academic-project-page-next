import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({ variable: "--font-sans" });

const fontMono = Noto_Sans_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"antialiased font-sans",
					fontMono.variable,
					notoSans.variable,
					"prose prose-lg prose-zinc dark:prose-invert prose-a:text-blue-500 prose-a:dark:text-blue-300 prose-a:no-underline prose-a:hover:underline prose-a:font-normal prose-code:bg-zinc-200 prose-code:dark:bg-zinc-800 prose-code:text-zinc-800 prose-code:dark:text-zinc-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:before:content-none prose-code:after:content-none max-w-none pt-16 pb-6",
				)}
			>
				<main>
					{children}
					<footer className="mx-auto max-w-[50rem] px-6 text-center mt-12">
						<p className="text-sm text-center text-muted-foreground">
							Built with{" "}
							<a
								href="https://github.com/RomanHauksson/academic-project-astro-template"
								rel="nofollow"
							>
								Roman Hauksson-Neill&apos;s project page template
							</a>
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
