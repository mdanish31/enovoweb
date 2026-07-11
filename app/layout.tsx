import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Enovo | Patent, Trademark & Intellectual Property Consultants | Pune, India',
  description:
    'Enovo is a modern Intellectual Property consulting firm based in Pune, India, helping startups, inventors, manufacturers, and international clients with patent, trademark, industrial design, and copyright services.',
  keywords:
    'Patent Consultant Pune, Patent Services India, Patent Filing India, Trademark Registration, Industrial Design Registration, Copyright Registration, Patent Drafting, IP Consultant India, Patent Agent Pune',
  authors: [{ name: 'Enovo' }],
  creator: 'Enovo',
  publisher: 'Enovo',
  applicationName: 'Enovo',
  metadataBase: new URL('https://enovo.in'),
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/enovoweb/assets/images/logos/Enovo_Logo_Jpeg-01 copy.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/enovoweb/assets/images/logos/Enovo_Logo_Jpeg-01 copy.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: { url: '/enovoweb/assets/images/logos/Enovo_Logo_Jpeg-01 copy.jpg', type: 'image/jpeg' },
    shortcut: '/enovoweb/assets/images/logos/Enovo_Logo_Jpeg-01 copy.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://enovo.in',
    siteName: 'Enovo',
    title: 'Modern Intellectual Property Consulting Firm | Enovo',
    description:
      'Protect your patents, trademarks, industrial designs and copyrights with Enovo\'s expert IP consulting services.',
    images: [
      {
        url: '/enovoweb/assets/images/logos/Enovo_Logo_Jpeg-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Enovo — IP Consulting Firm, Pune India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@enovoip',
    creator: '@enovoip',
    title: 'Enovo | Patent, Trademark & IP Consulting | Pune, India',
    description:
      'Helping startups, inventors and global clients protect patents, trademarks, industrial designs and copyrights. Based in Pune, India.',
    images: ['/enovoweb/assets/images/logos/Enovo_Logo_Jpeg-01.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#16C79A',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Enovo',
  legalName: 'Enovo IP Consulting',
  description:
    'Modern Intellectual Property consulting firm specializing in patent drafting, trademark registration, industrial design and copyright services in India.',
  url: 'https://enovo.in',
  logo: 'https://enovo.in/assets/images/logos/Enovo_Logo_Jpeg-01.jpg',
  image: 'https://enovo.in/assets/images/logos/Enovo_Logo_Jpeg-01.jpg',
  telephone: ['+91-9209582896', '+91-7020653868'],
  email: 'connect@enovoinsights.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No. 206, Royal Exotica, Kondhwa',
    addressLocality: 'Pune',
    postalCode: '411048',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '18.4529',
    longitude: '73.8714',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/enovo-ip',
    'https://www.instagram.com/enovo.ip',
  ],
  areaServed: ['India', 'United States', 'United Kingdom', 'Europe', 'Global'],
  serviceType: [
    'Patent Drafting',
    'Patent Filing',
    'Trademark Registration',
    'Industrial Design Registration',
    'Copyright Services',
    'IP Consulting',
    'International Patent Filing',
  ],
  priceRange: '$$',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, UPI',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Patent and why do I need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A patent grants exclusive rights to manufacture, use, and sell an invention for up to 20 years. It protects your innovation from being copied by competitors and creates a legally defensible competitive advantage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Patent Registration take in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Indian patent process typically takes 3-5 years from filing to grant, depending on the technology field and examination queue. From day one of filing, you receive legal protection with a priority date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Trademark Registration and how long does it take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trademark registration protects your brand name, logo, or slogan. In India, the process takes 18-24 months. Upon registration, you receive trademark rights valid for 10 years, renewable indefinitely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a Patent and a Trademark?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A patent protects inventions such as products, processes, or compositions, while a trademark protects brand identifiers such as names, logos, and slogans. Patents last 20 years; trademarks last indefinitely with renewals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Industrial Design Registration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industrial Design registration protects the visual features of a product including shape, pattern, and ornamentation. It prevents others from copying your product appearance and is valid for 10 years, extendable by 5 more years in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can foreign companies file patents in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Foreign companies and individuals can file patents in India directly or via the PCT route. Enovo has extensive experience supporting international law firms and foreign associates with India-based filing and prosecution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can startups apply for patents with fee concessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. DPIIT-recognised startups are eligible for up to 80% fee reduction at the Indian Patent Office. Enovo specialises in helping startups identify patentable innovations and navigate the concession process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does IP protection cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Costs vary by service type and entity. Startups and individuals receive significant government fee concessions. Contact Enovo for a transparent, customised quote for your specific IP needs.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <meta name="theme-color" content="#16C79A" />
        <meta name="msapplication-TileColor" content="#16C79A" />
        <meta name="author" content="Enovo" />
        <meta name="copyright" content="Enovo IP Consulting" />
        <link rel="manifest" href="/enovoweb/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
