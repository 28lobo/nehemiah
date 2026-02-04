"use client";

export const NewsTicker = () => {
  return (
    <div className="mb-12 flex items-center gap-4 bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg overflow-hidden">
      {/* Label */}
      <span className="flex items-center gap-2 text-primary font-bold text-sm shrink-0 z-10  backdrop-blur-sm pr-2">
        LATEST UPDATES:
      </span>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-move">
            <div className="ticker-item text-sm font-medium inline-block text-black">
              New political reform bill proposes increased oversight for local governing bodies... • 
              Prophetic voices convening in Brussels for the 2025 Summit... • 
              Urban planning initiatives prioritized for heritage sites... • 
              Community leaders gather to discuss future infrastructure projects... • 
              New policies on digital ethics released for public review... • 
            </div>
            {/* Duplicate for seamless loop */}
            <div className="ticker-item text-sm font-medium inline-block text-black" aria-hidden="true">
              New political reform bill proposes increased oversight for local governing bodies... • 
              Prophetic voices convening in Brussels for the 2025 Summit... • 
              Urban planning initiatives prioritized for heritage sites... • 
              Community leaders gather to discuss future infrastructure projects... • 
              New policies on digital ethics released for public review... • 
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrap {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-move {
          display: inline-block;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }
        .ticker-move:hover {
          animation-play-state: paused;
        }
        .ticker-item {
          display: inline-block;
          padding: 0 2rem;
        }
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
};