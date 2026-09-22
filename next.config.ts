import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produit .next/standalone : un serveur minimal avec uniquement les
  // dépendances réellement utilisées. C'est ce que copie le Dockerfile.
  output: 'standalone',
};

export default nextConfig;
