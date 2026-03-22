import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const rawHash = location.hash.replace("#", "");
      let decodedHash: string | null = null;

      try {
        decodedHash = decodeURIComponent(rawHash);
      } catch {
        decodedHash = null;
      }

      if (decodedHash && /^[A-Za-z][A-Za-z0-9_\-:.]*$/.test(decodedHash)) {
        const el = document.getElementById(decodedHash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHash;
