import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",

	// If you deploy this template with GitHub pages, it may be hosted under a sub-path, such as:
	// https://romanhauksson.github.io/academic-project-page-next/
	// where `academic-project-page-next/` is the sub-path.
	basePath: process.env.PAGES_BASE_PATH ?? "",

	// Required because GitHub Pages doesn't support Next.js Image Optimization
	images: {
		unoptimized: true,
	},
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: ["remark-gfm", "remark-math"],
		rehypePlugins: ["rehype-mathjax", "rehype-expressive-code"],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
