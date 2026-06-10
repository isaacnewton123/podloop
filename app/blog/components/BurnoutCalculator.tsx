"use client";

import React, { useState } from "react";

export default function BurnoutCalculator() {
  const [guests, setGuests] = useState(4);
  const [hoursPerGuest, setHours] = useState(3);

  const totalHours = guests * hoursPerGuest;
  const daysLost = (totalHours / 24).toFixed(1);

  return (
    <div style={{
      background: "#f3f4f6",
      border: "2px solid #e5e7eb",
      borderRadius: "12px",
      padding: "24px",
      margin: "32px 0",
      fontFamily: "Inter, sans-serif"
    }}>
      <h3 style={{ marginTop: 0, color: "#111827", fontSize: "20px", fontWeight: "bold" }}>
        🔥 The Podcast Burnout Calculator
      </h3>
      <p style={{ color: "#4b5563", fontSize: "14px", marginBottom: "24px" }}>
        Find out exactly how much of your life you are losing to admin work every month.
      </p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontSize: "14px", fontWeight: 500, marginBottom: "8px" }}>
          Episodes per month: {guests}
        </label>
        <input 
          type="range" 
          min="1" 
          max="20" 
          value={guests} 
          onChange={(e) => setGuests(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#fb923c" }}
        />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label style={{ display: "block", fontSize: "14px", fontWeight: 500, marginBottom: "8px" }}>
          Admin hours per episode (emails, prep, chasing headshots): {hoursPerGuest}
        </label>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={hoursPerGuest} 
          onChange={(e) => setHours(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#fb923c" }}
        />
      </div>

      <div style={{ 
        background: totalHours > 20 ? "#fee2e2" : "#d1fae5", 
        color: totalHours > 20 ? "#991b1b" : "#065f46",
        padding: "16px", 
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "4px" }}>
          {totalHours} Hours Wasted
        </div>
        <div style={{ fontSize: "14px" }}>
          That is <strong>{daysLost} full days</strong> lost every single month! 
          {totalHours > 20 ? " You are basically working a part-time job just sending emails." : " Not terrible, but you could still be automating this with Podloop!"}
        </div>
      </div>
    </div>
  );
}
