import { Sumana } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from '../components/smoothscrollprovider';
import Script from 'next/script';
const sumana = Sumana({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sumana",
  display: 'swap'
});

export const metadata = {
  title: 'Garcia Family Medicine - Compassionate Healthcare in Blue Springs, MO',
  description: 'Garcia Family Medicine - Compassionate healthcare with Dr. Tess Garcia in Blue Springs, Missouri. Direct Primary Care that puts patients first.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3772c565',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sumana.variable}>
      <body className={`${sumana.className} page-container`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Script
  src="https://widgets.leadconnectorhq.com/loader.js"
  data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
  strategy="lazyOnload"
/>
<chat-widget location-id="J2k1lQDLzZYnXDt4Xe5z" suppressHydrationWarning></chat-widget>
<chat-widget location-id="J2k1lQDLzZYnXDt4Xe5z" suppressHydrationWarning></chat-widget>
      </body>
    </html>
  );
}
