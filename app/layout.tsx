import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Tasued Cbt Practice',
  description: '',
}

//https://res.cloudinary.com/db7wwc9ex/image/upload/v1692745466/tasued-cbt/how_ahrhvn.jpg

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="https://res.cloudinary.com/db7wwc9ex/image/upload/v1692745466/tasued-cbt/how_ahrhvn.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Cbt" />
        <meta property="og:description" content="Tasued Cbt Parctice was built to help students feel more confident and prepared for exams and tests" />
        <meta property="og:url" content="https://tasued-cbt-practice.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tasued Cbt Practice" />


      </Head>
      <body>{children}</body>
    </html>
  )
}
