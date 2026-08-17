import React from 'react';

export function Bolder({ text, toBold = [] }) {
  const normalized = new Set(toBold.map((item) => item.trim()));
  const formattedText = String(text).split(/(\b\S+\b)/).map((word, index) =>
    normalized.has(word.trim()) ? <span key={index} className="bold-word">{word}</span> : word,
  );

  return <span>{formattedText}</span>;
}
