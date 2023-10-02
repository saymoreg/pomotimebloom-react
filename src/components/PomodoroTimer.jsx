import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const initialTimerMinutes = 25;
  const initialShortBreakMinutes = 5;
  const initialLongBreakMinutes = 15;

  const [timer, setTimer] = useState(initialTimerMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [newTimerValue, setNewTimerValue] = useState(initialTimerMinutes * 60);
  const [newShortBreakValue, setNewShortBreakValue] = useState(
    initialShortBreakMinutes * 60
  );
  const [newLongBreakValue, setNewLongBreakValue] = useState(
    initialLongBreakMinutes * 60
  );

  const [isShortBreak, setIsShortBreak] = useState(false);
  const [isLongBreak, setIsLongBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsActive(false);
    }

    if (isShortBreak) {
      setTimer(newShortBreakValue);
      setIsShortBreak(false);
    } else if (isLongBreak) {
      setTimer(newLongBreakValue);
      setIsLongBreak(false);
    }

    return () => clearInterval(interval);
  }, [
    isActive,
    timer,
    isShortBreak,
    isLongBreak,
    newShortBreakValue,
    newLongBreakValue,
  ]);

  const startTimer = () => {
    setIsActive(true);
    setIsShortBreak(false);
    setIsLongBreak(false);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer(initialTimerMinutes * 60);
    setIsShortBreak(false);
    setIsLongBreak(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const openConfigModal = () => {
    setShowConfigModal(true);
  };

  const closeConfigModal = () => {
    setShowConfigModal(false);
  };

  const handleTimerInputChange = (event) => {
    const inputValue = event.target.valueAsNumber;
    setNewTimerValue(inputValue * 60);
  };

  const handleShortBreakInputChange = (event) => {
    const inputValue = event.target.valueAsNumber;
    setNewShortBreakValue(inputValue * 60);
  };

  const handleLongBreakInputChange = (event) => {
    const inputValue = event.target.valueAsNumber;
    setNewLongBreakValue(inputValue * 60);
  };

  const updateTimer = () => {
    setTimer(newTimerValue);
    closeConfigModal();
  };

  const startShortBreak = () => {
    setIsShortBreak(true);
    setIsLongBreak(false);
    setTimer(newShortBreakValue);
    setIsActive(true);
  };

  const startLongBreak = () => {
    setIsLongBreak(true);
    setIsShortBreak(false);
    setTimer(newLongBreakValue);
    setIsActive(true);
  };

  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-secondary px-96 rounded-md">
      {/* screen where timer will be shown */}
      <div className="text-tertiary text-7xl">
        {isShortBreak
          ? formatTime(newShortBreakValue)
          : isLongBreak
          ? formatTime(newLongBreakValue)
          : formatTime(timer)}
      </div>
      {/* buttons of control start/stop/short_break/long_break */}
      <div className="py-4 text-lg">
        {!isActive ? (
          <>
            <button
              className="text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary"
              onClick={startTimer}
            >
              START
            </button>
            <button
              className="text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary"
              onClick={startShortBreak}
            >
              SHORT BREAK
            </button>
            <button
              className="text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary"
              onClick={startLongBreak}
            >
              LONG BREAK
            </button>
          </>
        ) : (
          <button
            className="text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary"
            onClick={stopTimer}
          >
            STOP
          </button>
        )}
        <button
          className="text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary"
          onClick={resetTimer}
        >
          RESET
        </button>
      </div>
      {/* settings button where you may customize your timer */}
      <div>
        <button
          className="text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary"
          onClick={openConfigModal}
        >
          CONFIGURATION
        </button>
        {showConfigModal && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-800">
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-primary text-2xl mb-4">
                Timer Configuration
              </h2>
              <label className="block mb-2 text-primary">
                Enter Timer Value (minutes):
              </label>
              <input
                type="number"
                value={newTimerValue / 60}
                onChange={handleTimerInputChange}
                className="border p-2 rounded-md w-full"
              />
              <label className="block mb-2 text-primary">
                Short Break Timer Value (minutes):
              </label>
              <input
                type="number"
                value={newShortBreakValue / 60}
                onChange={handleShortBreakInputChange}
                className="border p-2 rounded-md w-full"
              />
              <label className="block mb-2 text-primary">
                Long Break Timer Value (minutes):
              </label>
              <input
                type="number"
                value={newLongBreakValue / 60}
                onChange={handleLongBreakInputChange}
                className="border p-2 rounded-md w-full"
              />
              <button
                className="mt-4 text-tertiary border p-2 px-4 rounded-md bg-primary hover:bg-tertiary hover:text-primary"
                onClick={updateTimer}
              >
                Update Timer
              </button>
              <button
                className="mt-4 text-tertiary border p-2 px-4 rounded-md bg-primary hover:bg-tertiary hover:text-primary"
                onClick={closeConfigModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      {/* todo list task where you may add/delete/modify and put a checkmark on task */}
      <div>todo list</div>
    </div>
  );
};

export default PomodoroTimer;
