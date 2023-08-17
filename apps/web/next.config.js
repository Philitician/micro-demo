module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: "/docs:path*",
        destination: `${process.env.NEXT_PUBLIC_DOCS_URL}/:path*`,
      },
    ];
  },
};
