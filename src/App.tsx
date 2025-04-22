import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StreamingPage from './pages/StreamingPage';
import IPTVPage from './pages/IPTVPage';
import LogicielsPage from './pages/LogicielsPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import { servicesData } from './data/servicesData';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/streaming" element={<StreamingPage />} />
          <Route path="/iptv" element={<IPTVPage />} />
          <Route path="/logiciels" element={<LogicielsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {servicesData.map(service => (
            <Route 
              key={service.id} 
              path={`/services/${service.slug}`} 
              element={<ServicePage serviceId={service.id} />} 
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;