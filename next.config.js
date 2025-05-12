/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export", // Add this line for static HTML export
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. We recommend solving these errors instead.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true, // Also ignore TypeScript errors for build completion
  }
  // Optional: Add other configurations here if needed
  // For example, if you have images from external domains:
  // images: {
  //   unoptimized: true, // Required for static export with next/image if not using a custom loader
  //   domains: ["example.com"], // Add domains for external images
  // },
};

module.exports = nextConfig;

