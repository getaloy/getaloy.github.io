import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, HashRouter } from "react-router-dom";
import Terms from './terms';
import Privacy from './privacy';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter >
      <Routes>
          <Route index element={<App />} />
          <Route path="" element={<App />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

