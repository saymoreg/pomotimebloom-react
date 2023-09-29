import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [timer, setTimer] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes} : ${remainingSeconds}`;
  };

  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-secondary px-96">
      {/* screen where timer will be shown */}
      <div className="text-7xl">{formatTime(timer)}</div>
      {/* buttons of control start/stop/short_break/long_break */}
      <div>
        {!isActive ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Stop</button>
        )}
      </div>
      {/* settings button where you may customize your timer */}
      <div>settings button</div>
      {/* todo list task where you may add/delete/modify and put a checkmark on task */}
      <div>todo list</div>
    </div>
  );
};

export default PomodoroTimer;
