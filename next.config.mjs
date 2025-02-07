/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      netlifyServerActions: true,  // Enables Netlify's experimental server actions for forms
    },
  };
  
  export default nextConfig;
  