import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  { icon: '🔗', title: 'REST API', desc: 'Full REST API for creating, tracking, and managing deliveries programmatically. JSON responses, predictable endpoints.' },
  { icon: '⚡', title: 'Webhooks', desc: 'Receive real-time delivery events via webhooks. Get notified the moment a rider picks up or delivers a package.' },
  { icon: '📊', title: 'Dashboard', desc: 'Powerful business dashboard with analytics, delivery history, bulk operations, and team management.' },
  { icon: '🤝', title: 'Bulk Deliveries', desc: 'Send hundreds of delivery requests with a single API call. Perfect for e-commerce order fulfillment.' },
  { icon: '🏷️', title: 'Custom Branding', desc: 'White-label the tracking page with your own brand. Your customers see your logo, not MOVA\'s.' },
  { icon: '🛡️', title: 'Enterprise SLA', desc: 'Guaranteed uptime SLAs, priority support, and a dedicated account manager for high-volume businesses.' },
];

export default function BusinessPage() {
  return (
    <>
      <Head>
        <title>MOVA for Business — Enterprise Logistics API</title>
        <meta name="description" content="Integrate MOVA's logistics platform into your business. REST API, webhooks, bulk deliveries, and enterprise SLAs." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />

        {/* Hero */}
        <section className="px-6 md:px-16 pt-20 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.07),transparent_60%)]" />
          <div className="max-w-5xl mx-auto relative">
            <div className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">API v2.1 — Available Now</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              Logistics infrastructure<br />
              <span className="text-[#D4AF37]">for your business.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Plug our delivery API into your platform and handle thousands of deliveries per day. E-commerce, logistics, and enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register?plan=business" className="inline-block bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] px-8 py-4 rounded-full font-bold text-sm hover:-translate-y-1 transition-transform">
                Start Free Trial
              </Link>
              <Link href="#" className="inline-flex items-center gap-2 border border-slate-200 dark:border-white/10 px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                View API Docs →
              </Link>
            </div>
          </div>
        </section>

        {/* Code snippet */}
        <section className="px-6 md:px-16 py-16 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">Simple Integration</p>
            <pre className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 text-sm text-green-400 overflow-x-auto">
{`// Create a delivery with MOVA API
const response = await fetch('https://api.mova.ng/v2/deliveries', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    pickup: {
      address: '123 Victoria Island, Lagos',
      contact: { name: 'Alex Doe', phone: '+2348000000001' }
    },
    dropoff: {
      address: 'Lekki Phase 1, Lagos',
      contact: { name: 'Jane Doe', phone: '+2348000000002' }
    },
    packageSize: 'MEDIUM',
    priority: 'EXPRESS'
  })
});

const delivery = await response.json();
// → { trackingId: 'MOVA-8392', status: 'PENDING', estimatedTime: '30 mins' }`}
            </pre>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 md:px-16 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-black">Everything you need to scale</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">Built for developers and business teams who need reliability and control.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map(f => (
                <div key={f.title} className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl p-6">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="px-6 md:px-16 py-16 bg-slate-50 dark:bg-[#0F172A]/20">
          <p className="text-center text-sm text-slate-400 mb-10 uppercase tracking-widest font-bold">Trusted by businesses across Nigeria</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40">
            {['PayStack', 'Flutterwave', 'Jumia', 'Konga', 'TradeDepot', 'Sendbox'].map(name => (
              <span key={name} className="text-xl font-black text-slate-700 dark:text-white">{name}</span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-16 py-24 text-center">
          <h2 className="text-4xl font-black mb-4">Start integrating today</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">14-day free trial. No credit card required. Full API access from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?plan=business" className="bg-[#D4AF37] text-[#0F172A] px-10 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform">
              Start Free Trial
            </Link>
            <Link href="mailto:business@mova.ng" className="border border-slate-200 dark:border-white/10 px-10 py-4 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              Contact Sales
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
