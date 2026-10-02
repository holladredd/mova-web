import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Image
              src={isDarkMode ? '/logo-dark.svg' : '/logo-light.svg'}
              alt="MOVA" width={44} height={44}
            />
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              The modern way to move things. Fast, secure, and always on time.
            </p>
            <div className="flex gap-3 mt-6">
              {['Twitter', 'Instagram', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white transition-colors text-xs font-bold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {[
            { title: 'Product', links: ['Track Delivery', 'Pricing', 'API Docs', 'Changelog'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} MOVA Technologies Ltd. All rights reserved.</p>
          <p className="text-sm text-slate-400">Made with precision in Lagos, Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}
