"use client";
import { useState } from "react";
import { formationPositions } from "../data/formations";

interface Props {
  setFormation: (formation: string | null) => void;
}

const FormationButton: React.FC<Props> = ({ setFormation }) => {
  const [manualFormation, setManualFormation] = useState("");

  const handleClick = () => {
    const availableFormations = Object.keys(formationPositions);
    const randomFormation =
      availableFormations[
        Math.floor(Math.random() * availableFormations.length)
      ];
    setFormation(randomFormation);
    setManualFormation(randomFormation);
  };

  const handleManualFormationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setManualFormation(event.target.value);
    setFormation(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleClick}
      >
        Get Random Formation
      </button>
      <label htmlFor="manualFormation" className="mb-2">
        Or choose a formation:
      </label>
      <div className="flex items-center">
        <select
          id="manualFormation"
          value={manualFormation}
          onChange={handleManualFormationChange}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center"
        >
          <option value="">Select a formation</option>
          {Object.keys(formationPositions).map((formation) => (
            <option key={formation} value={formation}>
              {formation}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormationButton;
