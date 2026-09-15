const Logo = () => (
  <div className="flex items-center gap-2.5">
    {/* SVG matching Petronas Towers, Airplane, and Golden Swoop Arrow */}
    <div className="relative h-13 w-14 shrink-0">
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-sm"
      >
        {/* Petronas Towers Base & Spire Silhouette (White) */}
        {/* Left Spire */}
        <line x1="43" y1="12" x2="43" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
        {/* Right Spire */}
        <line x1="77" y1="12" x2="77" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />

        {/* Left Tower Body */}
        <path
          d="M 33 110 L 33 50 L 37 50 L 37 38 L 40 38 L 40 28 L 46 28 L 46 38 L 49 38 L 49 50 L 53 50 L 53 110 Z"
          fill="white"
        />

        {/* Right Tower Body */}
        <path
          d="M 67 110 L 67 50 L 71 50 L 71 38 L 74 38 L 74 28 L 80 28 L 80 38 L 83 38 L 83 50 L 87 50 L 87 110 Z"
          fill="white"
        />

        {/* Central Skybridge Arch */}
        <path
          d="M 53 66 C 53 54, 67 54, 67 66 V 95 H 53 Z"
          fill="none"
          stroke="white"
          strokeWidth="5"
        />

        {/* Flying Airplane Top Center */}
        <g transform="translate(56, 12) rotate(-15) scale(0.65)">
          {/* Motion Trails */}
          <path d="M -22 15 Q -10 16 0 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M -16 22 Q -6 21 4 20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          {/* Plane Silhouette */}
          <path
            d="M 32 16 L 14 6 L 16 14 L 2 15 L -2 12 L -4 16 L 3 19 L -1 27 L 3 27 L 9 20 L 26 20 Z"
            fill="white"
          />
        </g>

        {/* White Outer Shadow Swoop */}
        <path
          d="M 24 50 C 10 75, 26 112, 62 108 C 82 106, 100 86, 114 36 C 100 78, 80 100, 58 102 C 32 104, 18 78, 26 55 Z"
          fill="white"
        />

        {/* Primary Golden Swoop Arrow */}
        <path
          d="M 22 46 C 8 72, 24 108, 60 104 C 80 101, 98 80, 108 34 L 118 42 L 114 20 L 92 26 L 102 32 C 92 72, 76 94, 56 96 C 30 98, 16 74, 24 50 Z"
          fill="#FACC15"
        />
      </svg>
    </div>

    {/* Typography */}
    <div className="leading-none">
      <div className="text-[25px] font-extrabold tracking-normal text-white">
        MALAYSIA
      </div>
      <div className="text-[22px] font-bold text-yellow-400">Work Visa</div>
    </div>
  </div>
);

export { Logo };