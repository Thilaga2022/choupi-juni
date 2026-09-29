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

      return () => clearTimeout(timeout);
    }, MESSAGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      className="w-full bg-[#BDB2B0] text-[#ffffff]"
      aria-label="Website announcements"
    >
      <div className="mx-auto flex h-9 items-center justify-center px-4 sm:h-10">
        <p
          className={`
            text-center text-xs font-medium tracking-wide
            transition-all duration-300 ease-out
            sm:text-sm
            ${
              isChanging
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

