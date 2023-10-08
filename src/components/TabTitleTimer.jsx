import { useEffect } from "react";

const TabTitleTimer = ({ remainingTime }) => {
  useEffect(() => {
    const updateTitle = () => {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      document.title = `PomotimeBloom - ${formattedTime}`;
    };

    updateTitle();
  }, [remainingTime]);

  return null;
};

export default TabTitleTimer;
