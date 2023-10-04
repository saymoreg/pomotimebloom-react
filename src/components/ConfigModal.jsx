// ConfigModal.js
import React from "react";

const ConfigModal = ({
  showConfigModal,
  closeConfigModal,
  newTimerValue,
  newShortBreakValue,
  newLongBreakValue,
  handleTimerInputChange,
  handleShortBreakInputChange,
  handleLongBreakInputChange,
  updateTimer,
}) => {
  return (
    showConfigModal && (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-800">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-primary text-2xl mb-4">Timer Configuration</h2>
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
    )
  );
};

export default ConfigModal;
