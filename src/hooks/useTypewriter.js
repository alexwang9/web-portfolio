import { useState, useEffect } from 'react';

const useTypewriter = (phrases, speed = 100, deleteSpeed = 50, pauseDuration = 2000) => {
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (isPausing) {
        setIsPausing(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Delete characters
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Type characters
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          // Pause before deleting
          setIsPausing(true);
        }
      }
    }, isPausing ? pauseDuration : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [text, currentPhraseIndex, isDeleting, isPausing, phrases, speed, deleteSpeed, pauseDuration]);

  return text;
};

export default useTypewriter; 