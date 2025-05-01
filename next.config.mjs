/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.imgglobalinfotech.com"],
    },
    webpack: (config, { isServer }) => {
        // Add a fallback for react-native-web modules
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-native-web/dist/apis/StyleSheet/registry': 
              './src/mocks/react-native-web-mock.js',
            'react-native-web': 'react-native-web',
        };
        
        return config;
    },
};

export default nextConfig;
