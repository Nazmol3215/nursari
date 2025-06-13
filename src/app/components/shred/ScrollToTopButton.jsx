// components/ScrollToTopButton.js
"use client";
import { useEffect, useState } from "react";
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // স্ক্রল অবস্থান অনুযায়ী বাটনের ভিজিবিলিটি ঠিক করা
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // স্ক্রল টু টপ ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to Top"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "20px",
          backgroundColor: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          zIndex: 1000,
          transition: "0.3s",
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
