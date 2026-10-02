import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 border-b border-slate-900/10 dark:border-white/10 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={isDarkMode ? '/logo-dark.svg' : '/logo-light.svg'}
          alt="MOVA"
          width={44}
          height={44}
        />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/track" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Track Delivery</Link>
        <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Pricing</Link>
        <Link href="/business" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">For Business</Link>
        <Link href="/riders" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Become a Rider</Link>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0z"/></svg>
          ) : (
            <svg className="w-4 h-4 fill-slate-700" viewBox="0 0 24 24"><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8C12.52 3.06 12.27 3 12 3z"/></svg>
          )}
        </button>
        <Link href="/login" className="text-sm font-semibold text-slate-900 dark:text-white hover:opacity-80 transition-opacity px-4 py-2">
          Login
        </Link>
        <Link href="/register" className="text-sm font-semibold bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
