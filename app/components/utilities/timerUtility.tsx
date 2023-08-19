import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  minutes: any;
  onTimerEnd: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ minutes, onTimerEnd }) => {
  const [remainingTime, setRemainingTime] = useState<number>(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      } else {
        clearInterval(interval);
        onTimerEnd();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime, onTimerEnd]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (

      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {formatTime(remainingTime)}
      </span>

  );
};

export default CountdownTimer;
