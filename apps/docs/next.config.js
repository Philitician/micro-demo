module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      {
        source: "/web:path*",
        destination: `${process.env.NEXT_PUBLIC_WEB_URL}/:path*`,
      },
    ];
  },
};
