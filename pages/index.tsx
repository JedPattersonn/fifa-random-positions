import type { NextPage } from 'next';
import React, { useState } from 'react';
import FormationButton from '../components/FormationButton';
import PositionButton from '../components/PositionButton';

const Home: NextPage = () => {
  const [formation, setFormation] = useState<string | null>(null);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-6">Fifa Position Generator</h1>
      <FormationButton onFormationSelected={setFormation} />
      <p className="my-4">{formation ? `Selected Formation: ${formation}` : 'No Formation Selected'}</p>
      <PositionButton formation={formation} />
    </div>
  );
};

export default Home;
