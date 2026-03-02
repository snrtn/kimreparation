import { useState, useEffect, useRef } from "react";

const useScroll = (threshold = 100) => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    direction: null,
    isTriggered: false,
  });

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      setScrollData({
        scrollY: currentScrollY,
        direction,
        isTriggered: currentScrollY > threshold,
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollData;
};

export default useScroll;
