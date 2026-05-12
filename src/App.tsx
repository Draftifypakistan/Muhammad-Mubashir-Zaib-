/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Updates from './pages/Updates';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Added standard legal pages placeholders if requested in footer */}
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        <Footer />
        <MobileStickyBar />
      </div>
    </Router>
  );
}

// Simple placeholder page components for legal links
const PrivacyPage = () => (
  <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
    <h1 className="text-3xl font-bold mb-6 italic">Privacy Policy</h1>
    <p className="text-gray-600 leading-relaxed">
      Your files and personal information are handled carefully and are not shared with anyone. At Draftify Pakistan, we respect your confidentiality.
    </p>
  </div>
);

const TermsPage = () => (
  <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
    <h1 className="text-3xl font-bold mb-6 italic">Terms & Conditions</h1>
    <p className="text-gray-600 leading-relaxed">
      Services are provided based on client requirements. Payment is required as discussed before delivery. We strive for 100% accuracy in all our drafting and IT support work.
    </p>
  </div>
);

