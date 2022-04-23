import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './app-bar.module.css';

function AppBarComponent() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/devops.png" alt="devops" width="48px" height="48px" />
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
}

export default AppBarComponent;
