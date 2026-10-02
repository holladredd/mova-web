import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head><title>404 — Page Not Found | MOVA</title></Head>
      <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center text-center px-6">
        <div className="text-8xl mb-6 animate-bounce">📦</div>
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-2">Looks like this page got lost in transit.</p>
        <p className="text-slate-500 mb-10">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="bg-[#D4AF37] text-[#0F172A] font-bold px-8 py-4 rounded-full hover:-translate-y-1 transition-transform">
          Back to Home
        </Link>
      </div>
    </>
  );
}
