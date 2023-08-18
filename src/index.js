import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Terms from './terms';
import Privacy from './privacy';
// "homepage": "https://getaloy.github.io", -> for package.json 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<App/>}> */}
          <Route index element={<App />} />
          <Route path="" element={<App />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

