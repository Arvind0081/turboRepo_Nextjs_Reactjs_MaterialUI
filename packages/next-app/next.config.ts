import { NextConfig } from 'next';
const { Routes } = require('./route');

interface Route {
  source: string;
  destination: string;
}

const nextConfig: NextConfig = {
  async rewrites() {
    return Routes().map((route:Route) => ({
      source: route.source,
      destination: route.destination,
    }));
  },
};

export default nextConfig;
