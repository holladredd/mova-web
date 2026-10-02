import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const perks = [
  { icon: '💰', title: 'Earn Great Money', desc: 'Top riders earn ₦150,000+ monthly. Flexible hours, no ceiling on income.' },
  { icon: '🕐', title: 'Work Your Hours', desc: 'Go online when you want. Take breaks whenever. You are in full control.' },
  { icon: '📱', title: 'Smart App', desc: 'Our rider app is designed to be clean and distraction-free so you focus on the road.' },
  { icon: '🛡️', title: 'Safety First', desc: 'Real-time SOS button, background checks, and rider insurance on every job.' },
  { icon: '⚡', title: 'Instant Payouts', desc: 'Withdraw your earnings daily directly to your bank account. No waiting.' },
  { icon: '📈', title: 'Growth Bonuses', desc: 'Hit delivery targets and unlock performance bonuses and premium badges.' },
];

const requirements = [
  'Valid government-issued ID (NIN or Driver\'s License)',
  'A working smartphone (Android or iPhone)',
  'A road-worthy motorcycle, car, or bicycle',
  'Valid vehicle license and insurance',
  'At least 18 years of age',
  'Ability to navigate using a map application',
];

export default function RidersPage() {
  return (
    <>
      <Head>
        <title>Become a Rider — MOVA</title>
        <meta name="description" content="Join MOVA as a rider and earn money on your own schedule. Apply online in minutes." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />

        {/* Hero */}
        <section className="relative px-6 md:px-16 py-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0F172A]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)' }} />
          <div className="relative">
            <div className="text-7xl mb-6">🏍️</div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">Become a Rider</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Earn on your<br />own schedule.
            </h1>
            <p className="text-slate-400 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of MOVA riders and start earning money today. Apply online in under 5 minutes.
            </p>
            <Link href="/register?type=rider" className="inline-block bg-[#D4AF37] hover:bg-[#C5A059] text-[#0F172A] font-bold px-10 py-4 rounded-full text-lg transition-colors hover:-translate-y-1 transform">
              Apply to Ride
            </Link>
          </div>
        </section>

        {/* Earnings CTA */}
        <section className="px-6 md:px-16 py-16 bg-slate-50 dark:bg-[#0F172A]/20">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
            {[['₦150K+', 'Top monthly earnings'], ['3,200+', 'Active riders'], ['4.8★', 'Rider satisfaction']].map(([v, l]) => (
              <div key={l}>
                <p className="text-4xl font-black text-[#D4AF37]">{v}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Perks */}
        <section className="px-6 md:px-16 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-black">Why ride with MOVA?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {perks.map(p => (
                <div key={p.title} className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements + CTA */}
        <section className="px-6 md:px-16 py-20 bg-[#0F172A]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-4">Requirements</h2>
              <p className="text-slate-400 mb-8">Here is what you need to get approved as a MOVA rider.</p>
              <ul className="space-y-4">
                {requirements.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-slate-300 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white mb-2">Ready to start?</h3>
              <p className="text-slate-400 text-sm mb-6">Complete your application in minutes. Our team reviews and approves within 24 hours.</p>
              <Link href="/register?type=rider" className="block text-center bg-[#D4AF37] hover:bg-[#C5A059] text-[#0F172A] font-bold py-4 rounded-2xl transition-colors mb-3">
                Apply Now — It&apos;s Free
              </Link>
              <Link href="/riders/login" className="block text-center text-slate-400 text-sm hover:text-white transition-colors">
                Already a rider? Sign in →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
