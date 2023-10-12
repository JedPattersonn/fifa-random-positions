"use client";
import FormationButton from "@/Components/FormationButton";
import PositionButton from "@/Components/PositionButton";
import Footer from "@/Components/Footer";
import { useState } from "react";

export default function Home() {
  const [formation, setFormation] = useState<string | null>(null);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-6">Fifa Position Generator</h1>
      <FormationButton setFormation={setFormation} />

      <p className="my-4">
        {formation
          ? `Selected Formation: ${formation}`
          : "No Formation Selected"}
      </p>
      <PositionButton formation={formation} />
      <Footer />
    </div>
  );
}
