/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF (com WebP de fallback) preserva melhor a qualidade das fotos de fundo
    // no mesmo peso — importante porque os fundos são imagens grandes e detalhadas.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
