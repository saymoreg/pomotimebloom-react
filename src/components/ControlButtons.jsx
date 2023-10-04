import React from "react";

const ControlButtons = ({
  isActive,
  startTimer,
  stopTimer,
  resetTimer,
  startShortBreak,
  startLongBreak,
}) => {
  const buttonStyle =
    "text-tertiary border p-1 px-5 mx-5 rounded-md hover:text-primary hover:bg-tertiary";

  return (
    <div className="py-4 text-lg">
      {!isActive ? (
        <>
          <button className={buttonStyle} onClick={startTimer}>
            START
          </button>
          <button className={buttonStyle} onClick={startShortBreak}>
            SHORT BREAK
          </button>
          <button className={buttonStyle} onClick={startLongBreak}>
            LONG BREAK
          </button>
        </>
      ) : (
        <button className={buttonStyle} onClick={stopTimer}>
          STOP
        </button>
      )}
      <button className={buttonStyle} onClick={resetTimer}>
        RESET
      </button>
    </div>
  );
};

export default ControlButtons;
