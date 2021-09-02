import React from 'react';
import { Ads, Footer, Header, HeroHome, Solutions, Works } from '../partials';

const Home = (): JSX.Element => (
  <div className='flex flex-col min-h-screen overflow-hidden'>
    {/* Header */}
    <Header />

    {/* Body */}
    <main className='flex-grow'>
      <HeroHome />
      <Solutions />
      <Works />
      <Ads />
      <Footer />
    </main>
  </div>
);

export default Home;
