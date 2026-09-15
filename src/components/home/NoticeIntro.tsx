import React from "react";

export default function NoticeIntro() {
  return (
    <article className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-[#bce0f5] bg-gradient-to-b from-[#eaf4fb] via-[#e2f0fb] to-[#cbe4f7] p-6 shadow-sm">
      <div className="relative z-10 space-y-2">
        {/* Header with Red Megaphone and Title */}
        <div className="flex items-start gap-3">
          <div className="h-14 w-14 shrink-0 drop-shadow-sm">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              {/* Sound Burst Lines (Top-Right Angle) */}
              <g stroke="#E52323" strokeWidth="4.5" strokeLinecap="round">
                <line x1="68" y1="24" x2="74" y2="18" />
                <line x1="77" y1="33" x2="85" y2="29" />
                <line x1="79" y1="46" x2="88" y2="45" />
                <line x1="76" y1="59" x2="84" y2="61" />
              </g>

              {/* Megaphone Body Group (Tilted ~-25 degrees) */}
              <g transform="rotate(-25 50 50)">
                {/* Back Cap */}
                <rect
                  x="18"
                  y="38"
                  width="8"
                  height="24"
                  rx="4"
                  fill="#C41919"
                />

                {/* Main Red Cone Body */}
                <path
                  d="M 24 40 L 58 26 C 60 25 62 27 62 29 V 71 C 62 73 60 75 58 74 L 24 60 Z"
                  fill="#E52323"
                />

                {/* Glossy Top Highlight */}
                <path
                  d="M 26 42 L 56 29 L 56 38 L 26 47 Z"
                  fill="white"
                  opacity="0.2"
                />

                {/* Handle */}
                <path
                  d="M 28 60 L 32 82 C 32.5 84 30.5 86 28 86 L 22 86 C 19.5 86 18 84 19.5 82 L 24 60 Z"
                  fill="#B01414"
                />

                {/* Inner Speaker Mouth (Front Oval Accent) */}
                <ellipse cx="62" cy="50" rx="4" ry="22" fill="#B01414" />
              </g>
            </svg>
          </div>

          <div>
            <h2 className="text-[25px] font-extrabold leading-[1.05] tracking-tight text-[#082952]">
              Government
              <span className="block text-[34px] font-black leading-[1.05] text-[#082952]">
                Notice
              </span>
            </h2>

            <p className="mt-1 text-[20px] font-extrabold tracking-tight text-[#082952]">
              (সরকারি তথ্য)
            </p>
          </div>
        </div>

        {/* Bengali Body Text */}
        <p className="text-[15px] font-medium leading-[1.65] text-[#092c51]">
          মালয়েশিয়া সরকার ও সংশ্লিষ্ট কর্তৃপক্ষের
          <br />
          নির্দেশনা অনুযায়ী নিয়োগ সংক্রান্ত
          <br />
          কর্মসূচির সময়সূচি নিম্নরূপে
          <br />
          পরিবর্তিত হয়েছে:
        </p>
      </div>

      {/* Pure SVG Malaysian City Skyline Silhouette (KL Tower + Petronas Towers + Skyscrapers) */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-28 w-full pointer-events-none opacity-80">
        <svg
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="skyline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4189c3" opacity="0.75" />
              <stop offset="100%" stopColor="#256299" opacity="0.95" />
            </linearGradient>
          </defs>

          <g fill="url(#skyline-grad)">
            {/* Far Background Small Buildings */}
            <rect x="0" y="85" width="400" height="35" />
            <rect x="15" y="70" width="18" height="50" />
            <rect x="40" y="75" width="22" height="45" />
            <rect x="110" y="68" width="20" height="52" />
            <rect x="180" y="72" width="25" height="48" />
            <rect x="260" y="76" width="20" height="44" />
            <rect x="300" y="65" width="15" height="55" />

            {/* Left Petronas Twin Tower Silhouette */}
            <path d="M 75 120 V 45 H 79 V 35 H 81 V 24 H 82 V 12 H 83 V 24 H 84 V 35 H 86 V 45 H 90 V 120 Z" />
            <rect x="73" y="55" width="19" height="65" />

            {/* Right Petronas Twin Tower Silhouette */}
            <path d="M 98 120 V 45 H 102 V 35 H 104 V 24 H 105 V 12 H 106 V 24 H 107 V 35 H 109 V 45 H 113 V 120 Z" />
            <rect x="96" y="55" width="19" height="65" />

            {/* Skybridge */}
            <rect x="90" y="68" width="8" height="4" />

            {/* Midground Skyscrapers */}
            <path d="M 140 120 V 50 L 150 40 L 160 50 V 120 Z" />
            <rect x="170" y="55" width="18" height="65" />
            <path d="M 205 120 V 60 L 215 48 H 225 V 120 Z" />
            <rect x="235" y="65" width="22" height="55" />
            <rect x="290" y="58" width="16" height="62" />
            <rect x="315" y="68" width="25" height="52" />

            {/* KL Tower Silhouette (Far Right Spire) */}
            {/* Spire */}
            <line
              x1="362"
              y1="15"
              x2="362"
              y2="45"
              stroke="url(#skyline-grad)"
              strokeWidth="2"
            />
            {/* Tower Pod */}
            <path d="M 353 50 C 353 42, 371 42, 371 50 L 367 62 H 357 Z" />
            {/* Shaft */}
            <rect x="360" y="62" width="4" height="58" />
            {/* Base */}
            <path d="M 354 120 L 360 100 H 364 L 370 120 Z" />
          </g>
        </svg>
      </div>
    </article>
  );
}
