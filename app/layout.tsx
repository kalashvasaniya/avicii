import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avicii - A Tribute to Tim Bergling',
  description: 'A tribute to Avicii - Tim Bergling, featuring his iconic music and legacy in electronic dance music.',
  keywords: 'Avicii, Tim Bergling, EDM, Electronic Dance Music, DJ, Producer, Music, Tribute, Kalash Vasaniya',
  authors: [{ name: 'Kalash Vasaniya' }],
  creator: 'Kalash Vasaniya',
  publisher: 'SuperFast',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://avicii.kalashvasaniya.com/',
    title: 'Avicii - A Tribute to Tim Bergling',
    description: 'A tribute to Avicii - Tim Bergling, featuring his iconic music and legacy in electronic dance music.',
    siteName: 'Avicii Tribute',
    locale: 'en_US',
    images: [
      {
        url: 'https://res.cloudinary.com/dwb211sw5/image/upload/v1747769437/linko/lco0b7xj1hg5n4fpnug4.jpg',
        width: 1200,
        height: 630,
        alt: 'Avicii Tribute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avicii - A Tribute to Tim Bergling',
    description: 'A tribute to Avicii - Tim Bergling, featuring his iconic music and legacy in electronic dance music.',
    images: ['https://res.cloudinary.com/dwb211sw5/image/upload/v1747769437/linko/lco0b7xj1hg5n4fpnug4.jpg'],
    creator: '@amikalash',
  },
  icons: {
    icon: '/img/avicii.jpeg',
    apple: '/img/avicii.jpeg',
  },
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  alternates: {
    canonical: 'https://avicii.kalashvasaniya.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FJKSXYNMLD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJKSXYNMLD');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 