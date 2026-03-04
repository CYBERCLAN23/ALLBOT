import './globals.css';

export const metadata = {
  title: 'ALLbot — Ultimate WhatsApp Automation Bot in Africa (FCFA) | XyberClan',
  description: 'Automate your WhatsApp groups and business customer service with ALLbot. The most complete AI chatbot, moderation tool, and fun game bot for the FCFA zone.',
  keywords: 'WhatsApp bot, bot WhatsApp Afrique, automatisation WhatsApp, group moderation bot, FCFA bot, XyberClan, AI chat WhatsApp, customer service bot',
  metadataBase: new URL('https://allbot.xyberclan.com'),
  alternates: {
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr',
      'fr-CM': '/fr'
    },
  },
  openGraph: {
    title: 'ALLbot — Automate Your WhatsApp (Business & Groups)',
    description: 'Transform your WhatsApp groups into thriving communities and automate your business. Available in FCFA.',
    url: 'https://allbot.xyberclan.com',
    siteName: 'ALLbot by XyberClan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ALLbot — WhatsApp Bot Automation by XyberClan',
      },
    ],
    locale: 'fr_CM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALLbot — The Ultimate WhatsApp Bot',
    description: 'Automate group management, business tools, and games on WhatsApp.',
    creator: '@XyberClan',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: '/icon1.png',
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    title: 'Allbot',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
