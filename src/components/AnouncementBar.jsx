import { useEffect, useState } from "react";

const OFFERS = [
  "✨ WE'RE LIVE!",
  "🎉 25% OFF on Your FIRST ORDER",
  "💛 LITTLE JOYS, MADE FOR LITTLE ONES",
];

const MESSAGE_INTERVAL = 3500;

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);

      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
        setIsChanging(false);
      }, 250);
    }, MESSAGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      className="w-full bg-[#AFA3A3] text-white"
      aria-label="Website announcements"
    >
      <div className="mx-auto flex min-h-10 items-center justify-center px-4 py-2 sm:min-h-11">
        <p
          aria-live="polite"
          className={`
            text-center text-[10px] font-semibold uppercase tracking-[0.12em]
            transition-all duration-300 ease-out
            sm:text-xs sm:tracking-[0.18em]
            ${isChanging
              ? "scale-95 opacity-0"
              : "scale-100 opacity-100"
            }
          `}
        >
          {OFFERS[currentIndex]}
        </p>
      </div>

    </aside>
  );
};

export default AnnouncementBar;