import '@/assets/css/vendor/bootstrap.min.css'
import '@/assets/css/vendor/base.css'
import '@/assets/css/vendor/font-awesome.css'
import '@/assets/css/vendor/slick.css'
import '@/assets/css/vendor/slick-theme.css'
import '@/assets/scss/style.scss'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
