import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <>
      <Head>
        <title>MOVA | Modern Logistics</title>
        <meta name="description" content="Move an item safely from one location to another." />
      </Head>

      <nav className="navbar">
        <Image
          src={isDarkMode ? '/logo-dark.svg' : '/logo-light.svg'}
          alt="MOVA Logo"
          width={48}
          height={48}
        />
        <div className="nav-links">
          <a href="#">Send an item</a>
          <a href="#">For Businesses</a>
          <a href="#">For Riders</a>
          <a href="#" className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Login</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? (
              <svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8C12.52 3.06 12.27 3 12 3z"/></svg>
            )}
          </button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <h1>Move anything, securely.</h1>
          <p>
            MOVA connects you with verified riders to move your items safely from pickup to destination. Built for personal and business logistics.
          </p>
          <a href="#" className="btn-primary">Create a Delivery</a>
        </section>

        <section className="tracking-card">
          <h2>Track your delivery</h2>
          <form className="tracking-input-group" onSubmit={handleTrack}>
            <input
              type="text"
              className="tracking-input"
              placeholder="Enter Delivery ID (e.g. MOVA-8392)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
            <button type="submit" className="btn-gold">Track Package</button>
          </form>

          {isTracking && (
            <div className="status-timeline">
              <div className="status-node">
                <div className="node-circle active">✓</div>
                <span className="node-label active">Pickup Confirmed</span>
              </div>
              <div className="status-node">
                <div className="node-circle active">✓</div>
                <span className="node-label active">In Transit</span>
              </div>
              <div className="status-node">
                <div className="node-circle"></div>
                <span className="node-label">Arriving Soon</span>
              </div>
              <div className="status-node">
                <div className="node-circle"></div>
                <span className="node-label">Completed</span>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
