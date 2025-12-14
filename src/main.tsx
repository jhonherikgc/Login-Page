import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './loginPage';
import CreateAccount from './createAccount';
import './styles/loginPage.css';
import { HelmetProvider } from 'react-helmet-async';

const RootApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

createRoot(container).render(
  <React.StrictMode>
    {/* o RootApp com o HelmetProvider */}
    <HelmetProvider>
      <RootApp />
    </HelmetProvider>
  </React.StrictMode>
);