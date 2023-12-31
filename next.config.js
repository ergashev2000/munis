/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")(
    './src/i18n.ts'
);

const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "fakeimg.pl",
      "images.uzum.uz",
      "mini-io-api.texnomart.uz",
    ],
  },
};

module.exports = withNextIntl(nextConfig);
