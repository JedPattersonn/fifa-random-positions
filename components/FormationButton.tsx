import React from 'react';

interface Props {
  onFormationSelected: (formation: string) => void;
}

const formations = ['4-3-3', '4-4-2', '3-5-2', '4-2-3-1', '4-1-4-1']; // Add more formations if you want

const FormationButton: React.FC<Props> = ({ onFormationSelected }) => {
  const handleClick = () => {
    const randomFormation = formations[Math.floor(Math.random() * formations.length)];
    onFormationSelected(randomFormation);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Get Random Formation
    </button>
  );
};

export default FormationButton;
