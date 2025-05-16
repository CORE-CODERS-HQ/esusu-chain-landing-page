
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Download from '../components/sections/Download';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Download />
    </Layout>
  );
};

export default Index;
