import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
