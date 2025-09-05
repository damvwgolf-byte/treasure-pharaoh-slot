import React, { useState } from "react";

// --- Simple slot prototype (5x3, 20 lignes, Wild, Scatter, Bonus demo) ---
// ⚠️ Démo éducative : RNG côté client, pas pour l'argent réel. Pas de conformité légale.

// Symboles (code => emoji + libellé)
const SYMBOLS = {
  A: { emoji: "👑", label: "Pharaon" },
  K: { emoji: "🐈‍⬛", label: "Chat sacré" },
  Q: { emoji: "☥", label: "Ankh" },
  J: { emoji: "🏺", label: "Vase" },
  C: { emoji: "🪙", label: "Pièce" },
  F: { emoji: "🦅", label: "Faucon" },
  W: { emoji: "🪲", label: "Wild (Scarabée)" },
  S: { emoji: "🔺", label: "Scatter (Pyramide)" },
  B: { emoji: "🧿", label: "Bonus (Œil d'Horus)" },
};

// Bandes de rouleaux (reel strips) : répartition simple pour la démo
const REELS = [
  [
    "A","K","Q","J","C","F","A","K","Q","J","C","F","W","A","K","Q","W","J","C","F","S","A","K","Q","J","C","B","F","A","K","Q","J","C","F","A","K","Q","J","C","F","A","K","Q","J","C","F","A",
  ],
  [
    "K","Q","J","C","F","A","K","Q","J","C","F","A","K","Q","W","J","C","F","A","K","Q","J","C","F","S","A","K","Q","J","B","F","A","K","Q","J","C","F","A","K","Q","J","C","F","A","K",
