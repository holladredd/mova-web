import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const TIMELINE = [
  { label: 'Order Placed', time: '10:02 AM', desc: 'Your delivery request was received', done: true, icon: '📋' },
  { label: 'Rider Assigned', time: '10:08 AM', desc: 'Emeka A. accepted your order', done: true, icon: '🏍️' },
  { label: 'Picked Up', time: '10:25 AM', desc: 'Package collected from Victoria Island', done: true, icon: '📦' },
  { label: 'In Transit', time: '10:32 AM', desc: 'Rider is heading to your destination', done: true, icon: '🚀' },
  { label: 'Arriving Soon', time: '~10:47 AM', desc: 'Estimated 15 minutes away', done: false, icon: '📍' },
  { label: 'Delivered', time: '--', desc: 'Package will be delivered to your address', done: false, icon: '✅' },
];

export default function TrackPage() {
  const router = useRouter();
  const [trackingId, setTrackingId] = useState('');
  const [tracking, setTracking] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      setTrackingId(router.query.id);
      setTracking(true);
    }
  }, [router.query.id]);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setTracking(true);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Track Delivery — MOVA</title>
        <meta name="description" content="Track your MOVA delivery in real-time. Enter your tracking ID to see live status and GPS location." />
      </Head>
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />

        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Real-Time Tracking</p>
            <h1 className="text-4xl font-black">Track your delivery</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-3">Enter your tracking ID to see live updates</p>
          </div>

          {/* Search */}
          <form onSubmit={handleTrack} className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-3">
              <input
                id="tracking-input"
                type="text"
                value={trackingId}
                onChange={e => setTrackingId(e.target.value)}
                placeholder="Enter tracking ID (e.g. MOVA-8392)"
                className="flex-1 bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                id="track-btn"
                type="submit"
                disabled={loading}
                className="bg-[#D4AF37] hover:bg-[#C5A059] text-[#0F172A] font-bold px-8 py-4 rounded-2xl transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? <span className="w-4 h-4 border-2 border-[#0F172A]/30 border-t-[#0F172A] rounded-full animate-spin" /> : null}
                Track
              </button>
            </div>
          </form>

          {tracking && (
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Map placeholder */}
              <div className="lg:col-span-3 space-y-4">
                <div className="bg-[#0F172A] rounded-3xl h-72 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 70% 50%, #3B82F6 0%, transparent 50%)',
                  }} />
                  <div className="relative text-center">
                    <div className="text-5xl mb-3 animate-bounce">🏍️</div>
                    <p className="text-white/60 text-sm">Live GPS Map</p>
                    <p className="text-white/30 text-xs mt-1">Available in production with Google Maps API</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    In Transit
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-xs font-semibold">From: Victoria Island</p>
                        <p className="text-white/60 text-xs">To: Lekki Phase 1</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#D4AF37] text-sm font-black">~15 min</p>
                        <p className="text-white/60 text-xs">ETA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rider Info */}
                <div className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#0F172A] dark:bg-white flex items-center justify-center text-white dark:text-[#0F172A] font-black text-xl">E</div>
                    <div className="flex-1">
                      <p className="font-bold">Emeka A.</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-[#D4AF37]">⭐ 4.9</span>
                        <span className="text-slate-300 dark:text-white/20">·</span>
                        <span className="text-xs text-slate-500">Kawasaki Bike</span>
                        <span className="text-slate-300 dark:text-white/20">·</span>
                        <span className="text-xs text-slate-500">LGA-4821-BD</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button id="call-rider-btn" className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                        📞
                      </button>
                      <button id="message-rider-btn" className="w-10 h-10 rounded-full bg-[#0F172A] dark:bg-white flex items-center justify-center text-white dark:text-[#0F172A] hover:opacity-80 transition-opacity">
                        💬
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-3xl p-6 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-bold">{trackingId}</h2>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full">In Transit</span>
                  </div>
                  <div className="space-y-0">
                    {TIMELINE.map((step, i) => {
                      const isLast = i === TIMELINE.length - 1;
                      const isActive = step.done && (i === TIMELINE.length - 1 || !TIMELINE[i + 1].done);
                      return (
                        <div key={step.label} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-colors ${step.done ? isActive ? 'bg-[#D4AF37]' : 'bg-[#0F172A] dark:bg-white' : 'bg-slate-100 dark:bg-white/10'}`}>
                              {step.done ? (isActive ? step.icon : '✓') : step.icon}
                            </div>
                            {!isLast && <div className={`w-px flex-1 my-1 ${step.done ? 'bg-[#0F172A] dark:bg-white' : 'bg-slate-100 dark:bg-white/10'}`} style={{ minHeight: '24px' }} />}
                          </div>
                          <div className={`pb-5 flex-1 ${isLast ? '' : ''}`}>
                            <div className="flex items-center justify-between">
                              <p className={`text-sm font-bold ${step.done ? '' : 'text-slate-400'}`}>{step.label}</p>
                              <p className="text-xs text-slate-400">{step.time}</p>
                            </div>
                            <p className={`text-xs mt-0.5 ${step.done ? 'text-slate-500 dark:text-slate-400' : 'text-slate-300 dark:text-slate-600'}`}>{step.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!tracking && (
            <div className="text-center py-16 text-slate-400">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-lg font-semibold">Enter your tracking ID above</p>
              <p className="text-sm mt-2">We will show you real-time delivery updates</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
