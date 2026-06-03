import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

/**
 * Fonte Space Grotesk carregada do próprio projeto (next/font/local), sem
 * depender de servidor externo e sem o texto "saltar" enquanto a fonte chega.
 */
const spaceGrotesk = localFont({
  src: [
    { path: '../fonts/SpaceGrotesk-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/SpaceGrotesk-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/SpaceGrotesk-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'POLARIS, A estrela que guia decisões',
  description:
    'POLARIS, plataforma brasileira de inteligência espacial: monitoramento ambiental, conectividade satelital resiliente e controle de frota autônoma em missões espaciais.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body className="bg-black font-sans text-white antialiased">
        {children}
        {/* Grão de filme, textura sutil sobre toda a página (não bloqueia clique). */}
        <div aria-hidden className="film-grain" />
      </body>
    </html>
  );
}
