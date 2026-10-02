import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '', agreed: false });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const update = (field, val) => setForm(prev => ({ ...prev, [field]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 2) { setStep(2); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    window.location.href = '/dashboard';
  };

  return (
    <>
      <Head>
        <title>Create Account — MOVA</title>
        <meta name="description" content="Join MOVA and start sending deliveries across the city in minutes." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />
        <div className="flex min-h-[calc(100vh-73px)]">
          {/* Left panel */}
          <div className="hidden lg:flex flex-col justify-between w-1/2 bg-[#0F172A] p-16">
            <div />
            <div>
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl font-black text-white leading-tight mb-4">Start moving things<br />in minutes.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">Create a free account and send your first delivery today. No commitments, no hidden fees.</p>
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[['50K+', 'Deliveries'], ['4.9★', 'App Rating'], ['< 10min', 'Avg Pickup'], ['Free', 'First Delivery']].map(([v, l]) => (
                  <div key={l} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-2xl font-black text-[#D4AF37]">{v}</p>
                    <p className="text-slate-400 text-sm">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} MOVA Technologies Ltd.</p>
          </div>

          {/* Right panel */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2].map(s => (
                  <div key={s} className={`flex-1 h-1.5 rounded-full transition-colors ${s <= step ? 'bg-[#0F172A] dark:bg-white' : 'bg-slate-100 dark:bg-white/10'}`} />
                ))}
              </div>

              <h1 className="text-3xl font-black mb-2">{step === 1 ? 'Create your account' : 'Almost done!'}</h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                {step === 1 ? 'Join thousands of MOVA users.' : 'Set a secure password to finish.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">First Name</label>
                        <input
                          id="firstName"
                          type="text"
                          value={form.firstName}
                          onChange={e => update('firstName', e.target.value)}
                          placeholder="Alex"
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1.5">Last Name</label>
                        <input
                          id="lastName"
                          type="text"
                          value={form.lastName}
                          onChange={e => update('lastName', e.target.value)}
                          placeholder="Doe"
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">Email address</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">Phone number</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={e => update('phone', e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">Password</label>
                      <div className="relative">
                        <input
                          id="password"
                          type={showPass ? 'text' : 'password'}
                          value={form.password}
                          onChange={e => update('password', e.target.value)}
                          placeholder="Min. 8 characters"
                          className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 pr-12 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                        />
                        <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                          {showPass ? '🙈' : '👁️'}
                        </button>
                      </div>
                    </div>
                    {/* Password strength bar */}
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className={`flex-1 h-1 rounded-full transition-colors ${form.password.length >= i * 3 ? i <= 2 ? 'bg-red-400' : i === 3 ? 'bg-yellow-400' : 'bg-green-500' : 'bg-slate-100 dark:bg-white/10'}`} />
                        ))}
                      </div>
                      <p className="text-xs text-slate-400">{form.password.length === 0 ? 'Enter a password' : form.password.length < 6 ? 'Weak' : form.password.length < 9 ? 'Fair' : form.password.length < 12 ? 'Good' : 'Strong'}</p>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={form.agreed}
                        onChange={e => update('agreed', e.target.checked)}
                        className="mt-0.5 accent-[#0F172A]"
                      />
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        I agree to the{' '}
                        <a href="#" className="font-bold text-slate-900 dark:text-white hover:underline">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="font-bold text-slate-900 dark:text-white hover:underline">Privacy Policy</a>
                      </span>
                    </label>
                  </>
                )}

                <button
                  id="register-btn"
                  type="submit"
                  disabled={loading || (step === 2 && !form.agreed)}
                  className="w-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Creating account...</>
                  ) : step === 1 ? 'Continue' : 'Create Account'}
                </button>
              </form>

              <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
                Already have an account?{' '}
                <Link href="/login" className="font-bold text-slate-900 dark:text-white hover:text-[#D4AF37] transition-colors">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
