import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { HIPAACompliance } from './pages/HIPAACompliance';
import { TermsOfService } from './pages/TermsOfService';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/hipaa-compliance" element={<HIPAACompliance />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  );
}