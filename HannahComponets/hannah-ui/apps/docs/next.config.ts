import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sb-manager/:path*",
        destination: "/storybook/sb-manager/:path*",
      },
      {
        source: "/sb-addons/:path*",
        destination: "/storybook/sb-addons/:path*",
      },
      {
        source: "/sb-common-assets/:path*",
        destination: "/storybook/sb-common-assets/:path*",
      },
      {
        source: "/assets/:path*",
        destination: "/storybook/assets/:path*",
      },
      {
        source: "/iframe.html",
        destination: "/storybook/iframe.html",
      },
      {
        source: "/index.json",
        destination: "/storybook/index.json",
      },
      {
        source: "/project.json",
        destination: "/storybook/project.json",
      }
    ];
  },
};

export default nextConfig;
