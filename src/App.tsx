import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Partners from './pages/Partners';
import Media from './pages/Media';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [maintenance, setMaintenance] = useState<boolean | null>(null)
  useEffect(() => {
    fetch('https://app.octelis.com/api/monitor/status/emilheyerdahl.com')
      .then(r => r.ok ? r.json() : { maintenanceMode: false })
      .then((d: { maintenanceMode: boolean }) => setMaintenance(d.maintenanceMode))
      .catch(() => setMaintenance(false))
  }, [])
  if (maintenance) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', backgroundColor: '#f8f8f8', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', color: '#111' }}>Down for maintenance</h1>
      <p style={{ color: '#666', maxWidth: '400px' }}>emilheyerdahl.com is temporarily offline. We&apos;ll be back shortly.</p>
      <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#aaa' }}>Managed by <a href="https://octelis.com" style={{ color: '#b8622a' }}>Octelis</a></p>
    </div>
  )

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
