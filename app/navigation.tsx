'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">{path === '/' ? '🏠Home🏠' : 'Home'}</Link>
        </li>
        <li>
          <Link href="/about-us">
            {path === '/about-us' ? '❤️About Us❤️' : 'About Us'}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
