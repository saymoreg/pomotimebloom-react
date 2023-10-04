import React, { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import ControlButtons from "./ControlButtons";
import ConfigModal from "./ConfigModal";

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

  const buttonStyle =
    "text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary";

  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-secondary px-96 rounded-md">
      {/* screen where timer will be shown */}
      <TimerDisplay
        isShortBreak={isShortBreak}
        isLongBreak={isLongBreak}
        timer={timer}
        newShortBreakValue={newShortBreakValue}
        newLongBreakValue={newLongBreakValue}
      />
      {/* buttons of control start/stop/short_break/long_break */}
      <ControlButtons
        isActive={isActive}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        startShortBreak={startShortBreak}
        startLongBreak={startLongBreak}
      />
      {/* settings button where you may customize your timer */}
      <div>
        <button className={buttonStyle} onClick={openConfigModal}>
          CONFIGURATION
        </button>
        <ConfigModal
          showConfigModal={showConfigModal}
          closeConfigModal={closeConfigModal}
          newTimerValue={newTimerValue}
          newShortBreakValue={newShortBreakValue}
          newLongBreakValue={newLongBreakValue}
          handleTimerInputChange={handleTimerInputChange}
          handleShortBreakInputChange={handleShortBreakInputChange}
          handleLongBreakInputChange={handleLongBreakInputChange}
          updateTimer={updateTimer}
        />
      </div>
    </div>
  );
};

export default PomodoroTimer;
