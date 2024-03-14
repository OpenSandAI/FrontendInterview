import * as NextMdx from '@next/mdx'
//
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    appDir: true,
  },
  // Optionally, add any other Next.js config below
}
const withMDX = NextMdx.default({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [], // ESM ✅
  },
});
// // const nextConfig = {
// //   experimental: {
// //     appDir: true,
// //   },
// // };
//
// // const withMDX = require("@next/mdx")();
//
// // const withMDX = require("@next/mdx")();
// // module.exports = withMDX(nextConfig);
export default withMDX(nextConfig)

// const withMDX = require('@next/mdx')()
