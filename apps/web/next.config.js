module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: "/docs:path*",
        destination: `https://micro-demo-docs.vercel.app/:path*`,
      },
    ];
  },
};
