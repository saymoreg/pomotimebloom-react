import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const initialTimer = 1500;
  const [timer, setTimer] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [newTimerValue, setNewTimerValue] = useState(initialTimer);

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

  const resetTimer = () => {
    setIsActive(false);
    setTimer(initialTimer);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes} : ${remainingSeconds}`;
  };

  const openConfigModal = () => {
    setShowConfigModal(true);
  };

  const closeConfigModal = () => {
    setShowConfigModal(false);
  };

  const handleTimerInputChange = (event) => {
    const inputValue = event.target.value;
    setNewTimerValue(inputValue);
  };

  const updateTimer = () => {
    setTimer(newTimerValue);
    closeConfigModal();
  };

  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-secondary px-96 rounded-md">
      {/* screen where timer will be shown */}
      <div className="text-tertiary text-7xl">{formatTime(timer)}</div>
      {/* buttons of control start/stop/short_break/long_break */}
      <div className="py-4 text-lg">
        {!isActive ? (
          <button
            className="text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary"
            onClick={startTimer}
          >
            START
          </button>
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
              <h2 className="text-tertiary text-2xl mb-4">
                Timer Configuration
              </h2>
              <label className="block mb-2">Enter Timer Value (seconds):</label>
              <input
                type="number"
                value={newTimerValue}
                onChange={handleTimerInputChange}
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
