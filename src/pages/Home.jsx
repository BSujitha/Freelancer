import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Jobs from '../components/Jobs';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Your landing page sections */}
      <Hero />
      <Categories />
      <Jobs />
      <Services />
      <CTA />
    </>
  );
}
