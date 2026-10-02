import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const stats = [
  { value: '50K+', label: 'Deliveries made' },
  { value: '12K+', label: 'Active users' },
  { value: '3.2K+', label: 'Verified riders' },
  { value: '99.2%', label: 'On-time rate' },
];

const features = [
  {
    icon: '⚡',
    title: 'Instant Pickup',
    desc: 'Request a pickup and a verified rider arrives in minutes. No waiting, no hassle.',
  },
  {
    icon: '📍',
    title: 'Live GPS Tracking',
    desc: 'Watch your delivery in real-time on the map. Know exactly where it is at every moment.',
  },
  {
    icon: '🛡️',
    title: 'Insured Deliveries',
    desc: 'Every package is covered. Ship with confidence knowing MOVA protects your items.',
  },
  {
    icon: '💳',
    title: 'Flexible Payments',
    desc: 'Pay with card, bank transfer, or your MOVA wallet. Top up and pay instantly.',
  },
  {
    icon: '🏢',
    title: 'Business API',
    desc: 'Integrate MOVA into your platform. Automate bulk deliveries with our REST API.',
  },
  {
    icon: '🌟',
    title: 'Rated Riders',
    desc: 'Only top-rated, background-checked riders handle your deliveries. Quality guaranteed.',
  },
];

const steps = [
  { num: '01', title: 'Create a Request', desc: 'Enter your pickup and drop-off address, and tell us about your package.' },
  { num: '02', title: 'Rider is Matched', desc: 'We instantly connect you with the nearest available, verified rider.' },
  { num: '03', title: 'Track in Real-Time', desc: 'Follow your delivery live on the map until it safely reaches its destination.' },
];

const testimonials = [
  { name: 'Funmilayo A.', role: 'Small Business Owner', quote: 'MOVA has completely transformed how I send goods to my customers. It is fast, reliable, and my clients love the tracking feature.' },
  { name: 'Emeka C.', role: 'Rider, Lagos', quote: 'As a rider, the platform is simple to use. I get steady orders and the earnings are fair. Best gig platform I have used.' },
  { name: 'Adaeze N.', role: 'E-Commerce Store', quote: 'We integrated the MOVA API in a week. Now we handle 200+ deliveries a day with zero friction. Incredible product.' },
];

export default function Home() {
  const [trackingId, setTrackingId] = useState('');
  const [tracking, setTracking] = useState(false);

  return (
    <>
      <Head>
        <title>MOVA — Move Anything, Securely</title>
        <meta name="description" content="MOVA connects you with verified riders to move your items safely from pickup to destination. Instant tracking, insured deliveries, flexible payments." />
      </Head>

      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />

        {/* Hero */}
        <section className="relative overflow-hidden px-6 md:px-16 pt-24 pb-32 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Now available across Lagos & Abuja
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
              Move anything,{' '}
              <span className="text-[#D4AF37]">securely.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Connect with verified riders. Track deliveries in real-time. Ship with confidence — every single time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard/create"
                className="bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform"
              >
                Send an Item
              </Link>
              <Link
                href="/track"
                className="border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                Track a Delivery
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#0F172A]/30 py-12 px-6 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-black text-[#D4AF37]">{s.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Track widget */}
        <section className="px-6 md:px-16 py-20">
          <div className="max-w-3xl mx-auto bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-none">
            <h2 className="text-2xl font-bold mb-2">Track your delivery</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">Enter your tracking ID to see the live status of your package.</p>
            <form
              className="flex flex-col sm:flex-row gap-3 mb-0"
              onSubmit={e => { e.preventDefault(); if (trackingId.trim()) setTracking(true); }}
            >
              <input
                type="text"
                value={trackingId}
                onChange={e => setTrackingId(e.target.value)}
                placeholder="e.g. MOVA-8392"
                className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button type="submit" className="bg-[#D4AF37] hover:bg-[#C5A059] text-[#0F172A] font-bold px-8 py-4 rounded-xl transition-colors whitespace-nowrap">
                Track Package
              </button>
            </form>

            {tracking && (
              <div className="mt-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg">{trackingId}</p>
                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full">In Transit</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">From: 123 Victoria Island, Lagos → To: Lekki Phase 1, Lagos</p>
                <div className="relative flex justify-between">
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-100 dark:bg-white/10" />
                  {['Order Placed', 'Rider Assigned', 'Picked Up', 'In Transit', 'Delivered'].map((step, i) => {
                    const done = i < 4;
                    return (
                      <div key={step} className="relative z-10 flex flex-col items-center gap-3 flex-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${done ? 'bg-[#D4AF37] text-[#0F172A]' : 'bg-slate-100 dark:bg-white/10 text-slate-400'}`}>
                          {done ? '✓' : ''}
                        </div>
                        <span className={`text-xs font-medium text-center leading-tight ${done ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{step}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="px-6 md:px-16 py-20 bg-slate-50 dark:bg-[#0F172A]/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">Why MOVA</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Everything you need to ship</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">Designed from the ground up for speed, reliability, and peace of mind.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map(f => (
                <div key={f.title} className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 md:px-16 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Simple as 1-2-3</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-full w-full h-px bg-slate-200 dark:bg-white/10 -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] rounded-2xl flex items-center justify-center text-xl font-black mb-6">{step.num}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 md:px-16 py-20 bg-[#0F172A] dark:bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Trusted by thousands</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-[#D4AF37] text-sm">★</span>)}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-16 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Ready to move smarter?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">Join thousands of businesses and individuals already using MOVA.</p>
            <Link
              href="/register"
              className="inline-block bg-[#D4AF37] text-[#0F172A] px-10 py-4 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform"
            >
              Create Free Account
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
