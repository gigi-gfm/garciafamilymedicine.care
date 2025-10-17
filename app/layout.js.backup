import { Sumana } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from '../components/smoothscrollprovider';

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
      </body>
    </html>
  );
}