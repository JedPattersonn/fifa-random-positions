import type { NextPage } from 'next';
import React, { useState } from 'react';
import FormationButton from '../components/FormationButton';
import PositionButton from '../components/PositionButton';
import Footer from '../components/Footer';
import Head from 'next/head';

const Home: NextPage = () => {
  const [formation, setFormation] = useState<string | null>(null);

  return (
    <>
     <Head>
        <title>Random FIFA Positions</title>
        <meta name="description" content="Easily get random formations and positions on Fifa" />
        <meta name="keywords" content="FIFA, Pro Clubs, Formations, Positions, Random, Next.js, App, fifa, jed, jed patterson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Jed Patterson" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Random FIFA Positions" />
        <meta property="og:description" content="Easily create random FIFA Pro Clubs formations and positions for you and your friends." />
        <meta property="og:url" content="https://fifa-positions.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Random FIFA Positions" />
      </Head>
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-6">Fifa Position Generator</h1>
      <FormationButton onFormationSelected={setFormation} />
      <p className="my-4">{formation ? `Selected Formation: ${formation}` : 'No Formation Selected'}</p>
      <PositionButton formation={formation} />
      <Footer />
    </div>
    </>
  );
};

export default Home;
