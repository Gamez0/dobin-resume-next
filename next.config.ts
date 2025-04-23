const isProd = process.env.NODE_ENV ==='production';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    output: isProd ? 'export' : 'standalone',
    basePath: isProd ? '/dobin-resume-next' : '',
    assetPrefix: isProd ? '/dobin-resume-next/' : '',
    trailingSlash: true,
};

export default nextConfig;
