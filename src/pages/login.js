import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    window.location.href = '/dashboard';
  };

  return (
    <>
      <Head>
        <title>Login — MOVA</title>
        <meta name="description" content="Sign in to your MOVA account to send and track deliveries." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />
        <div className="flex min-h-[calc(100vh-73px)]">
          {/* Left panel */}
          <div className="hidden lg:flex flex-col justify-between w-1/2 bg-[#0F172A] p-16">
            <div />
            <div>
              <div className="text-6xl mb-6">📦</div>
              <h2 className="text-4xl font-black text-white leading-tight mb-4">
                Your deliveries,<br />your way.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">Thousands of verified riders ready to move your items safely across the city.</p>
              <div className="mt-12 space-y-4">
                {['Real-time GPS tracking', 'Insured deliveries', 'Instant rider matching', '24/7 support'].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} MOVA Technologies Ltd.</p>
          </div>

          {/* Right panel */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-black mb-2">Welcome back</h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Sign in to your MOVA account.</p>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm rounded-xl p-4 mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Email address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-semibold">Password</label>
                    <a href="#" className="text-xs text-[#D4AF37] hover:underline font-medium">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPass ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 pr-12 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                    >
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
                <button
                  id="login-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing in...</>
                  ) : 'Sign In'}
                </button>
              </form>

              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                <span className="text-xs text-slate-400">or continue with</span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
              </div>

              <button
                id="google-login-btn"
                className="w-full flex items-center justify-center gap-3 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="w-5 h-5 bg-[#4285F4] rounded-full flex items-center justify-center text-white text-xs font-bold">G</span>
                Continue with Google
              </button>

              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="font-bold text-slate-900 dark:text-white hover:text-[#D4AF37] transition-colors">Sign up free</Link>
              </p>

              <div className="mt-6 text-center">
                <Link href="/riders/login" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                  Are you a rider? Sign in here →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
