import { useEffect, useState } from 'react';

type UseStreamingTextOptions = {
  /** When false, text resets and typing pauses. */
  active: boolean;
  /** Milliseconds between characters. */
  speed?: number;
  /** Delay before typing starts. */
  delay?: number;
};

export function useStreamingText(
  text: string,
  { active, speed = 28, delay = 0 }: UseStreamingTextOptions
) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed('');
      setIsComplete(false);
      return;
    }

    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          if (intervalId) window.clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, active, speed, delay]);

  return { displayed, isComplete, isStreaming: active && !isComplete && displayed.length > 0 };
}
