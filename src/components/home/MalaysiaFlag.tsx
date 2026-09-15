export const MalaysiaFlag = ({ className = "h-10 w-16" }: { className?: string }) => (
  <div
    className={`${className} relative overflow-hidden border border-white/40 bg-white`}
  >
    <div
      className="absolute inset-0"
      style={{
        background:
          "repeating-linear-gradient(to bottom, #d91c35 0px, #d91c35 3px, #fff 3px, #fff 6px)",
      }}
    />
    <div className="absolute left-0 top-0 h-1/2 w-[48%] bg-[#071e56]" />
    <div className="absolute left-[13%] top-[9%] text-[15px] text-yellow-300">★</div>
    <div className="absolute left-[8%] top-[8%] text-[11px] text-white">☾</div>
  </div>
);