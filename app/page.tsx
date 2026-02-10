"use client";

import { formationPositions } from "@/data/formations";
import Script from "next/script";
import { useMemo, useState } from "react";

const HOME_URL = "https://randomfifapositions.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the random FIFA position generator work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a formation manually or spin one at random, then draw positions one by one until every role is assigned.",
      },
    },
    {
      "@type": "Question",
      name: "Can I include an Any role for flexible squads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Turn on Include Any and the generator adds an extra wildcard slot to your available positions.",
      },
    },
    {
      "@type": "Question",
      name: "Is Random FIFA Positions mobile friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The app is built mobile-first with large controls and quick one-hand interactions for lobbies and party matches.",
      },
    },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Random FIFA Positions",
  url: HOME_URL,
  applicationCategory: "GameApplication",
  operatingSystem: "Web",
  description:
    "Generate random FIFA and EA FC formations and player positions for squad challenges, friendlies, and Pro Clubs nights.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  const formations = useMemo(() => Object.keys(formationPositions), []);

  const [selectedFormation, setSelectedFormation] = useState<string>("");
  const [includeAny, setIncludeAny] = useState(false);
  const [remainingPositions, setRemainingPositions] = useState<string[]>([]);
  const [takenPositions, setTakenPositions] = useState<string[]>([]);
  const [currentPosition, setCurrentPosition] = useState<string>("");

  const selectedBasePositions = selectedFormation
    ? formationPositions[selectedFormation]
    : [];

  const displayedPositions = includeAny
    ? [...selectedBasePositions, "Any"]
    : selectedBasePositions;

  const resetRound = (formation: string, includeAnyValue: boolean) => {
    const base = formationPositions[formation] ?? [];
    const nextPool = includeAnyValue ? [...base, "Any"] : [...base];

    setSelectedFormation(formation);
    setRemainingPositions(nextPool);
    setTakenPositions([]);
    setCurrentPosition("");
  };

  const handleRandomFormation = () => {
    const randomFormation =
      formations[Math.floor(Math.random() * formations.length)];
    resetRound(randomFormation, includeAny);
  };

  const handleManualFormation = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const nextFormation = event.target.value;
    if (!nextFormation) {
      setSelectedFormation("");
      setRemainingPositions([]);
      setTakenPositions([]);
      setCurrentPosition("");
      return;
    }

    resetRound(nextFormation, includeAny);
  };

  const handleToggleAny = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextIncludeAny = event.target.checked;
    setIncludeAny(nextIncludeAny);

    if (selectedFormation) {
      resetRound(selectedFormation, nextIncludeAny);
    }
  };

  const drawPosition = () => {
    if (remainingPositions.length === 0) {
      setCurrentPosition("");
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingPositions.length);
    const newPosition = remainingPositions[randomIndex];

    setCurrentPosition(newPosition);
    setTakenPositions((prev) => [...prev, newPosition]);
    setRemainingPositions((prev) =>
      prev.filter((_, index) => index !== randomIndex),
    );
  };

  return (
    <main className="matchday-shell">
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7629352561801539"
        strategy="lazyOnload"
        async
        crossOrigin="anonymous"
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Matchday Utility</span>
            <h1 id="hero-title">Random FIFA Positions</h1>
            <p>
              Fast role assignment for EA Sports FC and FIFA sessions. Start
              with a random formation or pick one manually, then draw positions
              until your squad is complete.
            </p>

            <div className="panel">
              <div className="controls">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleRandomFormation}
                >
                  Spin Random Formation
                </button>

                <div className="select-wrap">
                  <label htmlFor="formation-select">
                    Or choose a formation manually
                  </label>
                  <select
                    id="formation-select"
                    value={selectedFormation}
                    onChange={handleManualFormation}
                  >
                    <option value="">Select formation</option>
                    {formations.map((formation) => (
                      <option key={formation} value={formation}>
                        {formation}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="toggle" htmlFor="include-any">
                  <input
                    id="include-any"
                    type="checkbox"
                    checked={includeAny}
                    onChange={handleToggleAny}
                  />
                  Include wildcard Any role
                </label>

                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={drawPosition}
                  disabled={
                    !selectedFormation || remainingPositions.length === 0
                  }
                >
                  {remainingPositions.length > 0
                    ? "Draw Position"
                    : "All Positions Assigned"}
                </button>
              </div>

              <div className="status-card" aria-live="polite">
                <span className="status-key">Current Formation</span>
                <p className="status-value">{selectedFormation || "Waiting"}</p>
                <span className="status-key">Latest Draw</span>
                <p className="status-value">{currentPosition || "-"}</p>
              </div>

              <div className="quick-facts">
                <p>
                  <strong>{displayedPositions.length}</strong>
                  Total roles
                </p>
                <p>
                  <strong>{takenPositions.length}</strong>
                  Assigned
                </p>
                <p>
                  <strong>{remainingPositions.length}</strong>
                  Remaining
                </p>
              </div>
            </div>
          </div>

          <aside className="pitch" aria-label="Pitch and position board">
            <div className="pitch-lines">
              <span className="center-circle" />
            </div>
            <div className="positions">
              {displayedPositions.length === 0 && (
                <span className="position-chip available">
                  Choose a formation to start
                </span>
              )}
              {displayedPositions.map((position) => {
                const isTaken = takenPositions.includes(position);
                return (
                  <span
                    key={position}
                    className={`position-chip ${isTaken ? "taken" : "available"}`}
                  >
                    {position}
                  </span>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section
        className="content-block"
        aria-label="How to use Random FIFA Positions"
      >
        <article className="copy-card">
          <h2>Built for instant lobby setup</h2>
          <p>
            No accounts, no setup, no friction. Open the app, spin a formation,
            and assign roles in seconds before kickoff.
          </p>
        </article>
        <article className="copy-card">
          <h2>Optimized for mobile squads</h2>
          <p>
            Controls are sized for thumb use, layout stacks cleanly on smaller
            screens, and every state update is visible at a glance.
          </p>
        </article>
      </section>

      <section className="faq" aria-label="Frequently asked questions">
        <h2>FAQ</h2>
        <article className="faq-item">
          <h3>How do I randomize FIFA positions for my team?</h3>
          <p>
            Click Spin Random Formation, then tap Draw Position repeatedly until
            each player gets a role.
          </p>
        </article>
        <article className="faq-item">
          <h3>Can I use this for Pro Clubs and friendlies?</h3>
          <p>
            Yes. It works for casual friendlies, Pro Clubs nights, and any
            challenge mode where random roles keep games fresh.
          </p>
        </article>
        <article className="faq-item">
          <h3>Does it include current EA FC formations?</h3>
          <p>
            The generator includes a broad set of modern formations so you can
            run varied lineups quickly.
          </p>
        </article>
      </section>

      <footer className="site-footer">
        Built by <a href="https://jedpatterson.com">Jed Patterson</a>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
    </main>
  );
}
