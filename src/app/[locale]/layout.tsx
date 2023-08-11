import '../../styles/globals.css';
import type { Metadata } from 'next';
import { fontSans } from '@/lib/fonts';
import { I18nProviderClient } from '@/locales/client';
import { ThemeProvider } from '@/components/shared/theme/ThemeProvider';
import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@/components/shared/TailwindIndicator';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/shared/google-analytics/GoogleAnalytics';
import CookieBanner from '@/components/shared/google-analytics/CookieBanner';

export const metadata: Metadata = {
  title: 'Sinaturas.com',
  description: 'Emisión, firma, entrega y verificación electrónica',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  if (!GA_MEASUREMENT_ID) {
    throw new Error('Missing NEXT_PUBLIC_GOOGLE_ANALYTICS env variable');
  }

  const NODE_ENV = process.env.NODE_ENV;
  if (!NODE_ENV) {
    throw new Error('Missing NODE_ENV env variable');
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        {/* Analytic tools only in production */}
        {NODE_ENV === 'production' && (
          <>
            <VercelAnalytics />
            <GoogleAnalytics
              GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''}
            />
          </>
        )}
      </head>

      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased disableTransitionOnChange',
          fontSans.variable
        )}
      >
        <I18nProviderClient locale={params.locale}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <TailwindIndicator />

            {children}

            {/* Analytic tools only in production */}
            {NODE_ENV === 'production' && <CookieBanner />}
          </ThemeProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
