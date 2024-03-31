import '../styles/global.css';
import { Metadata } from 'next';
import Navigation from './navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | Best Sellers',
    default: 'Best Sellers',
  },
  description: 'The New York Times Best Seller Explorer',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
