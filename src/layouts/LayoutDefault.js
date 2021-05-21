import React from 'react';
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    <Navbar navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  