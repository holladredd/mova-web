import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const MOCK_DELIVERIES = [
  { id: '1', trackingId: 'MOVA-8392', status: 'IN_TRANSIT', from: 'Victoria Island, Lagos', to: 'Lekki Phase 1', price: 1500, rider: 'Emeka A.', time: '15 mins', date: 'Today, 10:25 AM' },
  { id: '2', trackingId: 'MOVA-8391', status: 'DELIVERED', from: 'Ikeja', to: 'Yaba', price: 2200, rider: 'Tunde B.', time: 'Delivered', date: 'Yesterday, 3:10 PM' },
  { id: '3', trackingId: 'MOVA-8388', status: 'DELIVERED', from: 'Surulere', to: 'Ikorodu', price: 3800, rider: 'Chidi K.', time: 'Delivered', date: '3 days ago' },
  { id: '4', trackingId: 'MOVA-8377', status: 'CANCELLED', from: 'Oshodi', to: 'Gbagada', price: 1200, rider: 'N/A', time: '--', date: '1 week ago' },
];

const statusColors = {
  IN_TRANSIT: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-400', label: 'In Transit' },
  DELIVERED: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400', label: 'Delivered' },
  PENDING: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-500', label: 'Pending' },
  CANCELLED: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400', label: 'Cancelled' },
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <Head>
        <title>Dashboard — MOVA</title>
      </Head>
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#050505] text-slate-900 dark:text-white">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back,</p>
              <h1 className="text-3xl font-black">Alex Doe 👋</h1>
            </div>
            <Link
              href="/dashboard/create"
              id="create-delivery-btn"
              className="inline-flex items-center gap-2 bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] px-6 py-3 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-transform"
            >
              <span className="text-lg">+</span> New Delivery
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Deliveries', value: '12', icon: '📦', delta: '+3 this week' },
              { label: 'Active Now', value: '1', icon: '🚀', delta: 'In Transit' },
              { label: 'Wallet Balance', value: '₦11,300', icon: '💳', delta: 'Available' },
              { label: 'Avg. Rating', value: '4.9★', icon: '⭐', delta: 'of 5.0' },
            ].map(s => (
              <div key={s.label} className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl p-5">
                <div className="text-2xl mb-3">{s.icon}</div>
                <p className="text-2xl font-black">{s.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p>
                <p className="text-xs text-[#D4AF37] font-medium mt-2">{s.delta}</p>
              </div>
            ))}
          </div>

          {/* Active Delivery */}
          <div className="bg-white dark:bg-[#1A1A1A] border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Active Delivery</h2>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full">In Transit</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-sm">📍</div>
                  <div>
                    <p className="text-xs text-slate-500">Pickup</p>
                    <p className="text-sm font-semibold">123 Victoria Island, Lagos</p>
                  </div>
                </div>
                <div className="ml-4 w-px h-4 bg-slate-200 dark:bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-sm">🎯</div>
                  <div>
                    <p className="text-xs text-slate-500">Destination</p>
                    <p className="text-sm font-semibold">Lekki Phase 1, Lagos</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0F172A] dark:bg-white flex items-center justify-center text-white dark:text-[#0F172A] font-black text-lg">E</div>
                <div>
                  <p className="font-bold">Emeka A.</p>
                  <p className="text-xs text-slate-500">⭐ 4.9 · Kawasaki Bike</p>
                  <p className="text-xs text-[#D4AF37] font-semibold mt-1">ETA: ~15 minutes</p>
                </div>
                <Link href="/track?id=MOVA-8392" className="ml-auto text-xs font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  Track →
                </Link>
              </div>
            </div>
          </div>

          {/* Deliveries Table */}
          <div className="bg-white dark:bg-[#1A1A1A] border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/5">
              <h2 className="text-lg font-bold">Delivery History</h2>
              <div className="flex gap-2">
                {['overview', 'active', 'completed', 'cancelled'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full capitalize transition-colors ${activeTab === tab ? 'bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A]' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-white/5">
              {MOCK_DELIVERIES.filter(d => activeTab === 'overview' || d.status === activeTab.toUpperCase() || (activeTab === 'completed' && d.status === 'DELIVERED')).map(d => {
                const sc = statusColors[d.status];
                return (
                  <div key={d.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-lg">
                      {d.status === 'DELIVERED' ? '✅' : d.status === 'IN_TRANSIT' ? '🚀' : d.status === 'CANCELLED' ? '❌' : '⏳'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold">{d.trackingId}</p>
                      <p className="text-xs text-slate-500 truncate">{d.from} → {d.to}</p>
                    </div>
                    <div className="hidden md:block text-xs text-slate-500">{d.date}</div>
                    <div className="hidden md:block">
                      <p className="text-sm font-bold text-right">₦{d.price.toLocaleString()}</p>
                      <p className="text-xs text-slate-500 text-right">{d.rider}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${sc.bg} ${sc.text}`}>{sc.label}</span>
                    {d.status === 'IN_TRANSIT' && (
                      <Link href={`/track?id=${d.trackingId}`} className="text-xs text-[#D4AF37] font-bold hover:underline">Track</Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
