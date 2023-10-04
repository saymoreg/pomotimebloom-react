import React from "react";

const TimerDisplay = ({
  isShortBreak,
  isLongBreak,
  timer,
  newShortBreakValue,
  newLongBreakValue,
}) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="text-tertiary text-7xl">
      {isShortBreak
        ? formatTime(newShortBreakValue)
        : isLongBreak
        ? formatTime(newLongBreakValue)
        : formatTime(timer)}
    </div>
  );
};

export default TimerDisplay;
