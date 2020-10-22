import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Particles from 'react-particles-js';
import { particleSettings } from '../lib/particleSetting'

const LayoutDefault = ({ children }) => (
  <>
    <Particles style={{ position: 'absolute' }} params={particleSettings} />
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  