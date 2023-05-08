import React, { useState, useEffect } from "react";
import { formationPositions } from "../data/formations";

interface Props {
  formation: string | null;
}

const PositionButton: React.FC<Props> = ({ formation }) => {
  const [remainingPositions, setRemainingPositions] = useState<string[]>([]);
  const [takenPositions, setTakenPositions] = useState<string[]>([]);
  const [currentPosition, setCurrentPosition] = useState<string | null>(null);
  const [includeAny, setIncludeAny] = useState<boolean>(false);

  useEffect(() => {
    if (formation) {
      const positions = includeAny
        ? [...formationPositions[formation], "Any"]
        : [...formationPositions[formation]];
      setRemainingPositions(positions);
      setTakenPositions([]);
      setCurrentPosition(null);
    }
  }, [formation, includeAny]);

  const handleClick = () => {
    if (remainingPositions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingPositions.length);
      const newPosition = remainingPositions[randomIndex];
      setCurrentPosition(newPosition);
      setRemainingPositions((prev) => prev.filter((_, i) => i !== randomIndex));
      setTakenPositions((prev) => [...prev, newPosition]);
    } else {
      setCurrentPosition(null);
    }
  };

  const getPositionColor = (position: string) => {
    return takenPositions.includes(position) ? "bg-green-500" : "bg-red-500";
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl mb-2">{currentPosition ? currentPosition : "-"}</p>
      <label htmlFor="includeAny" className="mb-4">
        <input
          type="checkbox"
          id="includeAny"
          checked={includeAny}
          onChange={(e) => setIncludeAny(e.target.checked)}
          className="mr-2"
        />
        Include Any position
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleClick}
        disabled={!formation}
      >
        {remainingPositions.length > 0
          ? currentPosition
            ? "Get Another Position"
            : "Get a Position"
          : "No Positions Remaining"}
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {(formation
          ? includeAny
            ? [...formationPositions[formation], "Any"]
            : formationPositions[formation]
          : []
        ).map((position) => (
          <div
            key={position}
            className={`text-center text-white py-1 px-2 rounded ${getPositionColor(
              position
            )}`}
          >
            {position}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PositionButton;
