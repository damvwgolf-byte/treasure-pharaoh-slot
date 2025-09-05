import React, { useState } from "react";

// --- Prototype de machine à sous façon "trésor du pharaon"
// ⚠️ Démo éducative : RNG côté client, pas pour usage réel avec argent.

const SYMBOLS = {
  UN: { emoji: "👑", label: "Pharaon" },
  K: { emoji: "🐈", label: "Chat sacré" },
  Q: { emoji: "♀️", label: "Ankh" },
  J: { emoji: "🏺", label: "Vase" },
  C: { emoji: "🙂", label: "Morceau" },
  F: { emoji: "🦅", label: "Faucon" },
  W: { emoji: "🌴", label: "Sauvage" },
  S: { emoji: "🔺", label: "Disperseur" },
  B: { emoji: "🎯", label: "Bonus" },
};

const REELS = [
  ["UN", "K", "Q", "J", "C", "F", "W", "S", "B"],
  ["K", "Q", "J", "C", "F", "UN", "W", "S"],
  ["Q", "J", "C", "F", "UN", "K", "B"],
  ["J", "C", "F", "UN", "K", "Q", "S"],
  ["C", "F", "UN", "K", "Q", "J", "W"],
];

function spinReels() {
  return REELS.map(
    (reel) => reel[Math.floor(Math.random() * reel.length)]
  );
}

export default function App() {
  const [grid, setGrid] = useState([]);
  const [message, setMessage] = useState("");

  const handleSpin = () => {
    const rows = [];
    for (let r = 0; r < 3; r++) {
      rows.push(spinReels());
    }
    setGrid(rows);
    setMessage("Bonne chance !");
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">🎰 Trésor du Pharaon</h1>
      <div className="bg-white p-4 rounded shadow grid grid-cols-5 gap-2 text-2xl">
        {grid.length === 0
          ? <p className="col-span-5 text-center text-gray-500">Appuie sur SPIN</p>
          : grid.map((row, i) =>
              row.map((sym, j) => (
                <div key={`${i}-${j}`} className="flex items-center justify-center border rounded h-12 w-12">
                  {SYMBOLS[sym].emoji}
                </div>
              ))
            )}
      </div>
      <button
        onClick={handleSpin}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        SPIN
      </button>
      <p className="mt-2 text-gray-700">{message}</p>
    </div>
  );
}
