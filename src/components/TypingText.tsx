import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  /** Replaces default `.typing-cursor` (e.g. on light backgrounds). */
  cursorClassName?: string;
}

const TypingText = ({ text, className = "", cursorClassName = "typing-cursor" }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        // Blink cursor twice then hide
        setTimeout(() => setShowCursor(false), 1600);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={["inline-block min-w-0 max-w-full text-center", className].filter(Boolean).join(" ")}>
      {displayed}
      {showCursor && <span className={cursorClassName} />}
    </span>
  );
};

export default TypingText;
