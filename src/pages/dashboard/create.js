import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const SIZES = [
  { key: 'SMALL', label: 'Small', desc: 'Documents, phone, accessories', icon: '📄', price: '₦1,200 – ₦2,000', time: '~30 mins' },
  { key: 'MEDIUM', label: 'Medium', desc: 'Shoes, clothing, small boxes', icon: '👟', price: '₦2,000 – ₦4,000', time: '~45 mins' },
  { key: 'LARGE', label: 'Large', desc: 'Appliances, large parcels', icon: '📦', price: '₦4,000 – ₦8,000', time: '~60 mins' },
];

export default function CreateDelivery() {
  const [step, setStep] = useState(1);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedSize, setSelectedSize] = useState('SMALL');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);

  const sizeData = SIZES.find(s => s.key === selectedSize);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setBooked(true);
    setLoading(false);
  };

  if (booked) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
          <h1 className="text-3xl font-black mb-3">Delivery Booked!</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-2">Your tracking ID is</p>
          <p className="text-2xl font-black text-[#D4AF37] mb-8">MOVA-{Math.floor(Math.random() * 9000 + 1000)}</p>
          <p className="text-sm text-slate-500 mb-8">A rider has been notified and is on their way to your pickup location.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/track" className="bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] px-6 py-3 rounded-full font-bold text-sm">
              Track Delivery
            </Link>
            <Link href="/dashboard" className="border border-slate-200 dark:border-white/10 px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head><title>New Delivery — MOVA</title></Head>
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* Steps */}
          <div className="flex items-center gap-3 mb-10">
            {['Addresses', 'Package', 'Confirm'].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i + 1 <= step ? 'bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A]' : 'bg-slate-200 dark:bg-white/10 text-slate-400'}`}>
                  {i + 1 < step ? '✓' : i + 1}
                </div>
                <span className={`text-sm font-medium ${i + 1 <= step ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{s}</span>
                {i < 2 && <div className={`flex-1 h-px w-8 ${i + 1 < step ? 'bg-[#0F172A] dark:bg-white' : 'bg-slate-200 dark:bg-white/10'}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-3xl p-8">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Where to & from?</h2>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">📍 Pickup Address</label>
                  <input
                    id="pickup-address"
                    type="text"
                    value={pickup}
                    onChange={e => setPickup(e.target.value)}
                    placeholder="123 Victoria Island, Lagos"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">🎯 Drop-off Address</label>
                  <input
                    id="dropoff-address"
                    type="text"
                    value={dropoff}
                    onChange={e => setDropoff(e.target.value)}
                    placeholder="Lekki Phase 1, Lagos"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3 text-slate-500">Saved Addresses</p>
                  {[
                    { label: 'Home', addr: '12 Admiralty Way, Lekki Phase 1', icon: '🏠' },
                    { label: 'Office', addr: '3 Ozumba Mbadiwe, Victoria Island', icon: '🏢' },
                  ].map(a => (
                    <button key={a.label} onClick={() => setPickup(a.addr)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-left transition-colors mb-2">
                      <span className="text-xl">{a.icon}</span>
                      <div>
                        <p className="text-sm font-semibold">{a.label}</p>
                        <p className="text-xs text-slate-500">{a.addr}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-black">Package size</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Select the option that best describes your item.</p>
                {SIZES.map(s => (
                  <button
                    key={s.key}
                    id={`size-${s.key.toLowerCase()}`}
                    onClick={() => setSelectedSize(s.key)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${selectedSize === s.key ? 'border-[#0F172A] dark:border-white bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A]' : 'border-slate-100 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'}`}
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <div className="flex-1">
                      <p className={`font-bold ${selectedSize === s.key ? '' : ''}`}>{s.label}</p>
                      <p className={`text-xs mt-0.5 ${selectedSize === s.key ? 'text-white/70 dark:text-[#0F172A]/70' : 'text-slate-500'}`}>{s.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${selectedSize === s.key ? 'text-[#D4AF37]' : 'text-slate-700 dark:text-slate-300'}`}>{s.price}</p>
                      <p className={`text-xs mt-0.5 ${selectedSize === s.key ? 'text-white/60 dark:text-[#0F172A]/60' : 'text-slate-400'}`}>{s.time}</p>
                    </div>
                  </button>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-1.5 mt-4">Special instructions (optional)</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="e.g. Fragile item, handle with care"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#0F172A] dark:focus:border-white transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black">Review & Confirm</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Pickup', value: pickup || '123 Victoria Island, Lagos', icon: '📍' },
                    { label: 'Drop-off', value: dropoff || 'Lekki Phase 1, Lagos', icon: '🎯' },
                    { label: 'Package Size', value: `${sizeData.label} — ${sizeData.desc}`, icon: sizeData.icon },
                    { label: 'Estimated Time', value: sizeData.time, icon: '⏱️' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-white/5 rounded-xl">
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="text-sm font-semibold mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between p-5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl">
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Estimated Price</p>
                  <p className="text-xl font-black text-[#D4AF37]">{sizeData.price}</p>
                </div>
                <p className="text-xs text-slate-400 text-center">Final price is calculated by distance and confirmed when a rider accepts your request.</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="flex-1 border border-slate-200 dark:border-white/10 py-4 rounded-2xl font-bold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                Back
              </button>
            )}
            <button
              id="next-btn"
              onClick={step < 3 ? () => setStep(step + 1) : handleSubmit}
              disabled={loading}
              className="flex-[2] bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] py-4 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Booking...</>
              ) : step < 3 ? 'Continue' : 'Confirm & Book Rider'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
