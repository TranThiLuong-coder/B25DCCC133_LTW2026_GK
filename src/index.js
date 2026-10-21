import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";   // <-- THÊM dòng này
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>                                  {/* <-- THÊM */}
      <App />
    </BrowserRouter>                                 {/* <-- THÊM */}
  </React.StrictMode>
);