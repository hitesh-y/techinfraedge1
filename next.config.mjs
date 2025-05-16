/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimize images
    images: {
        domains: ["www.imgglobalinfotech.com","jsbglobalinfotech.com"],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        // Improve LCP by enabling priority for important images
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // Enable compression
    compress: true,
    // Optimize performance
    experimental: {
        optimizeCss: true,
        optimizePackageImports: [
            'framer-motion', 
            'lucide-react', 
            'react-slick', 
            'slick-carousel'
        ],
        scrollRestoration: true,
        // Enable modern optimizations
        serverActions: true,
        serverComponentsExternalPackages: [],
    },
    // Optimize webpack
    webpack: (config, { isServer }) => {
        // Add a fallback for react-native-web modules
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-native-web/dist/apis/StyleSheet/registry': 
              './src/mocks/react-native-web-mock.js',
            'react-native-web': 'react-native-web',
        };
        
        // Optimize bundle size
        config.optimization.minimize = true;
        
        // Add bundle analyzer in development mode
        if (process.env.ANALYZE === 'true') {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'server',
                    analyzerPort: 8888,
                    openAnalyzer: true,
                })
            );
        }
        
        return config;
    },
    // Optimize output
    output: 'standalone',
    // Enable React strict mode for better performance and fewer bugs
    reactStrictMode: true,
    // Optimize page loading
    poweredByHeader: false,
    swcMinify: true,
    // Improve TBT by enabling concurrent features
    reactProductionProfiling: false,
};

export default nextConfig;
