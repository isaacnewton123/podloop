"use client";

import React, { useState } from "react";

function SliderControl({ label, value, min, max, onChange }: { label: string, value: number, min: number, max: number, onChange: (v: number) => void }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <label style={{ display: "block", fontSize: "14px", fontWeight: 500, marginBottom: "8px" }}>
        {label}: {value}
      </label>
      <input 
        type="range" min={min} max={max} value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#fb923c" }}
      />
    </div>
  );
}

function ResultBox({ totalHours, daysLost }: { totalHours: number, daysLost: string }) {
  const isBad = totalHours > 20;
  return (
    <div style={{ 
      background: isBad ? "#fee2e2" : "#d1fae5", 
      color: isBad ? "#991b1b" : "#065f46",
      padding: "16px", borderRadius: "8px", textAlign: "center"
    }}>
      <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "4px" }}>
        {totalHours} Hours Wasted
      </div>
      <div style={{ fontSize: "14px" }}>
        That is <strong>{daysLost} full days</strong> lost every single month! 
        {isBad ? " You are basically working a part-time job just sending emails." : " Not terrible, but you could still be automating this with Podloop!"}
      </div>
    </div>
  );
}

export default function BurnoutCalculator() {
  const [guests, setGuests] = useState(4);
  const [hoursPerGuest, setHours] = useState(3);

  const totalHours = guests * hoursPerGuest;
  const daysLost = (totalHours / 24).toFixed(1);

  return (
    <div style={{
      background: "#f3f4f6", border: "2px solid #e5e7eb", borderRadius: "12px",
      padding: "24px", margin: "32px 0", fontFamily: "Inter, sans-serif"
    }}>
      <h3 style={{ marginTop: 0, color: "#111827", fontSize: "20px", fontWeight: "bold" }}>
        🔥 The Podcast Burnout Calculator
      </h3>
      <p style={{ color: "#4b5563", fontSize: "14px", marginBottom: "24px" }}>
        Find out exactly how much of your life you are losing to admin work every month.
      </p>

      <SliderControl 
        label="Episodes per month" 
        value={guests} min={1} max={20} onChange={setGuests} 
      />
      
      <SliderControl 
        label="Admin hours per episode (emails, prep, headshots)" 
        value={hoursPerGuest} min={1} max={10} onChange={setHours} 
      />

      <ResultBox totalHours={totalHours} daysLost={daysLost} />
    </div>
  );
}
