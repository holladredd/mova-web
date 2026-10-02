import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PLANS = [
  {
    name: 'Pay As You Go',
    badge: null,
    price: null,
    desc: 'Perfect for personal use. Pay only for what you send.',
    features: ['No monthly commitment', 'Real-time GPS tracking', 'Basic package insurance', 'Email support', 'Mobile app access'],
    cta: 'Get Started Free',
    href: '/register',
    highlight: false,
  },
  {
    name: 'Business',
    badge: 'Most Popular',
    price: '₦49,999',
    per: '/mo',
    desc: 'For growing businesses with regular delivery needs.',
    features: ['500 deliveries/month', 'Priority rider matching', 'Enhanced ₦500K insurance', 'API access included', 'Dedicated account manager', 'Advanced analytics'],
    cta: 'Start Business Plan',
    href: '/register?plan=business',
    highlight: true,
  },
  {
    name: 'Enterprise',
    badge: null,
    price: 'Custom',
    per: '',
    desc: 'Unlimited scale with SLA guarantees and full API access.',
    features: ['Unlimited deliveries', 'Custom SLA guarantee', 'Full REST & WebSocket API', 'White-label options', '24/7 dedicated support', 'Custom insurance terms'],
    cta: 'Contact Sales',
    href: '/contact',
    highlight: false,
  },
];

const PER_KM_RATES = [
  { size: 'Small', icon: '📄', desc: 'Documents, accessories, small items', base: '₦800', perKm: '₦80' },
  { size: 'Medium', icon: '👟', desc: 'Clothing, shoes, small boxes', base: '₦1,500', perKm: '₦120' },
  { size: 'Large', icon: '📦', desc: 'Appliances, large parcels', base: '₦3,000', perKm: '₦200' },
];

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing — MOVA</title>
        <meta name="description" content="Simple, transparent pricing. Pay as you go or choose a business plan. No hidden fees." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />

        {/* Hero */}
        <section className="px-6 md:px-16 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">Pricing</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Simple, transparent pricing</h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-xl mx-auto">No hidden fees. No surprises. Pay for what you use.</p>
        </section>

        {/* Plans */}
        <section className="px-6 md:px-16 pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`relative rounded-3xl p-8 border flex flex-col ${plan.highlight ? 'bg-[#0F172A] dark:bg-[#1A1A1A] border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.15)]' : 'bg-white dark:bg-[#1A1A1A] border-slate-100 dark:border-white/5'}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0F172A] text-xs font-black px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <p className={`text-sm font-bold uppercase tracking-wider ${plan.highlight ? 'text-[#D4AF37]' : 'text-slate-500 dark:text-slate-400'}`}>{plan.name}</p>
                  <div className="mt-2 flex items-end gap-1">
                    <p className={`text-4xl font-black ${plan.highlight ? 'text-white' : ''}`}>
                      {plan.price ?? 'Free'}
                    </p>
                    {plan.per && <p className={`text-sm mb-1 ${plan.highlight ? 'text-white/60' : 'text-slate-400'}`}>{plan.per}</p>}
                  </div>
                  <p className={`text-sm mt-2 ${plan.highlight ? 'text-white/60' : 'text-slate-500 dark:text-slate-400'}`}>{plan.desc}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-[#D4AF37]' : 'bg-slate-100 dark:bg-white/10'}`}>
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={plan.highlight ? '#0F172A' : '#64748b'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className={plan.highlight ? 'text-white/80' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block text-center py-3.5 rounded-2xl font-bold text-sm transition-all hover:-translate-y-0.5 ${plan.highlight ? 'bg-[#D4AF37] text-[#0F172A] hover:bg-[#C5A059]' : 'bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] hover:opacity-90'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Per-delivery rates */}
        <section className="px-6 md:px-16 py-20 bg-slate-50 dark:bg-[#0F172A]/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black">Pay-As-You-Go Rates</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-3">Prices for individual deliveries. Base rate + per-km charge.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {PER_KM_RATES.map(r => (
                <div key={r.size} className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-3">{r.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{r.size}</h3>
                  <p className="text-xs text-slate-500 mb-4">{r.desc}</p>
                  <div className="flex justify-around">
                    <div>
                      <p className="text-2xl font-black">{r.base}</p>
                      <p className="text-xs text-slate-400">Base fare</p>
                    </div>
                    <div className="w-px bg-slate-100 dark:bg-white/10" />
                    <div>
                      <p className="text-2xl font-black text-[#D4AF37]">{r.perKm}</p>
                      <p className="text-xs text-slate-400">Per km</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-16 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'Is there a minimum delivery fee?', a: 'Yes, the minimum delivery fee is ₦800 for small items, regardless of distance.' },
                { q: 'When am I charged?', a: 'You are only charged once a rider accepts your delivery request and the pickup is confirmed.' },
                { q: 'Are my items insured?', a: 'Yes. All deliveries are covered by basic insurance up to ₦100,000. Business and Enterprise plans have higher coverage.' },
                { q: 'Can I cancel a delivery?', a: 'Yes, you can cancel before a rider is assigned at no charge. After assignment, a small cancellation fee may apply.' },
                { q: 'How does the Business API work?', a: 'Our REST API lets you programmatically create, track, and manage deliveries from your own platform. Full documentation is available after signing up.' },
              ].map(faq => (
                <details key={faq.q} className="group bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors list-none">
                    {faq.q}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
