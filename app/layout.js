import './globals.css';

export const metadata = {
  title: 'ALLbot — Ultimate WhatsApp Automation Bot in Africa (FCFA) | XyberClan',
  description: 'Automate your WhatsApp groups and business customer service with ALLbot. Developed by XyberClan, the most complete AI chatbot, moderation tool, and fun game bot for the FCFA zone.',
  keywords: 'WhatsApp bot, bot WhatsApp Afrique, automatisation WhatsApp, group moderation bot, FCFA bot, XyberClan, XyberClan team, WANDJI TCHALEU YANN FÉLIX, AI chat WhatsApp, customer service bot, allbot by xyberclan',
  metadataBase: new URL('https://allbot.xyberclan.com'),
  verification: {
    google: 'qFS57lS4DDaKA9q--P7O_-GGi5vi7ZjVjS4LTgZsMi8',
  },
  alternates: {
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr',
      'fr-CM': '/fr'
    },
  },
  openGraph: {
    title: 'ALLbot — Automate Your WhatsApp (Business & Groups) | XyberClan',
    description: 'Transform your WhatsApp groups into thriving communities and automate your business. Built by the expert team at XyberClan. Available in FCFA.',
    url: 'https://allbot.xyberclan.com',
    siteName: 'ALLbot by XyberClan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ALLbot — WhatsApp Bot Automation by XyberClan team',
      },
    ],
    locale: 'fr_CM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALLbot — The Ultimate WhatsApp Bot by XyberClan',
    description: 'Automate group management, business tools, and games on WhatsApp. Developed by XyberClan.',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ALLBot",
              "operatingSystem": "WhatsApp",
              "applicationCategory": "BusinessApplication",
              "description": "The ultimate all-in-one WhatsApp bot for group management, business tools, and AI chat.",
              "author": {
                "@type": "Organization",
                "name": "XyberClan",
                "url": "https://xyberclan.dev"
              },
              "developer": [
                {
                  "@type": "Person",
                  "name": "WANDJI TCHALEU YANN FÉLIX",
                  "jobTitle": "Lead Developer & Designer",
                  "affiliation": {
                    "@type": "Organization",
                    "name": "XyberClan"
                  }
                }
              ],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "XAF"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
