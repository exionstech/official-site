/** @type {import('next').NextConfig} */
import pwa from 'next-pwa';
const withPWA = pwa;
  
const nextConfig = {
    images:{
        domains: ['images.unsplash.com']
    },
    ...withPWA({
        dest:'public',
        register: true,
        skipWarning: true,
    })
};

export default nextConfig;
