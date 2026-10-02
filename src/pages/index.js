import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <>
      <Head>
        <title>MOVA | Modern Logistics</title>
        <meta name="description" content="Move an item safely from one location to another." />
      </Head>

      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-16 border-b border-slate-900/10 dark:border-white/10 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md">
        <Image
          src={isDarkMode ? '/logo-dark.svg' : '/logo-light.svg'}
          alt="MOVA Logo"
          width={48}
          height={48}
        />
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#" className="font-medium text-slate-900/80 hover:text-slate-900 dark:text-white/80 dark:hover:text-white transition-opacity">Send an item</a>
            <a href="#" className="font-medium text-slate-900/80 hover:text-slate-900 dark:text-white/80 dark:hover:text-white transition-opacity">For Businesses</a>
            <a href="#" className="font-medium text-slate-900/80 hover:text-slate-900 dark:text-white/80 dark:hover:text-white transition-opacity">For Riders</a>
          </div>
          <a href="#" className="bg-charcoal text-white dark:bg-white dark:text-charcoal px-6 py-2.5 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">Login</a>
          <button 
            className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-900/10 dark:border-white/10 hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-charcoal"><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8C12.52 3.06 12.27 3 12 3z"/></svg>
            )}
          </button>
        </div>
      </nav>

      <main>
        <section className="flex flex-col items-center text-center px-6 py-32 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent)] dark:bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.6),transparent)]">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">Move anything, securely.</h1>
          <p className="text-xl md:text-2xl text-slate-900/80 dark:text-white/80 max-w-2xl mb-10 leading-relaxed">
            MOVA connects you with verified riders to move your items safely from pickup to destination. Built for personal and business logistics.
          </p>
          <a href="#" className="bg-charcoal text-white dark:bg-white dark:text-charcoal px-10 py-4 rounded-full font-semibold text-lg hover:-translate-y-1 transition-transform border border-slate-900/10 dark:border-white/10">Create a Delivery</a>
        </section>

        <section className="relative z-10 max-w-4xl mx-auto -mt-12 mb-24 px-6">
          <div className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-2xl border border-slate-900/10 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold mb-6">Track your delivery</h2>
            <form className="flex flex-col md:flex-row gap-4 mb-10" onSubmit={handleTrack}>
              <input
                type="text"
                className="flex-1 bg-transparent border border-slate-900/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg focus:outline-none focus:border-gold dark:focus:border-gold transition-colors"
                placeholder="Enter Delivery ID (e.g. MOVA-8392)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <button type="submit" className="bg-gold hover:bg-gold-hover text-charcoal font-bold px-10 py-4 rounded-xl text-lg transition-colors">Track Package</button>
            </form>

            {isTracking && (
              <div className="relative flex justify-between items-start pt-6">
                <div className="absolute top-[38px] left-0 right-0 h-0.5 bg-slate-900/10 dark:bg-white/10 z-0"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold border-2 border-gold text-charcoal flex items-center justify-center font-bold text-sm">✓</div>
                  <span className="text-sm font-bold">Pickup Confirmed</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold border-2 border-gold text-charcoal flex items-center justify-center font-bold text-sm">✓</div>
                  <span className="text-sm font-bold">In Transit</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-charcoal border-2 border-slate-900/20 dark:border-white/20 flex items-center justify-center"></div>
                  <span className="text-sm font-medium text-slate-900/60 dark:text-white/60">Arriving Soon</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-charcoal border-2 border-slate-900/20 dark:border-white/20 flex items-center justify-center"></div>
                  <span className="text-sm font-medium text-slate-900/60 dark:text-white/60">Completed</span>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
