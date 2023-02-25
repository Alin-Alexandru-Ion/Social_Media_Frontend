import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App';
import Header from './Header';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Footer from './Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function Page() {
  return (
    <div >
      <Header />
      <Router >
        <Routes >
          <Route path="/" element={<LogIn />} />
          <Route path="/log-in" element={<LogIn />}
          />
          <Route path="/sign-up" element={<SignUp />}
          />
          <Route path="/forgot" element={<Forgot />}
          />
        </Routes >
      </Router >
      <Footer />
    </div >
  );
}

root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);