import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/lib/theme/ThemeProvider';
import AppLayout from '@/components/layout/AppLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'Modern e-commerce platform built with Next.js and MUI',
  keywords: ['ecommerce', 'shopping', 'products', 'online store'],
};

/**
 * Root Layout Component
 * 
 * Defines the base layout structure for the entire application.
 * Integrates font, theme, and global layout components.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}