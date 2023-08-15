import '../../../../../globals.css'
import type { Metadata } from 'next'

//the title here is just for testing only
export const metadata: Metadata = {
  title: 'Practice Edu-something',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}