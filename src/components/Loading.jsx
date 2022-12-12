import React, { useState, useEffect } from "react";

import loadingPhrases from "../utils/loadingPhrases";
const Loading = ({ onMobileMenuClose }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (index < loadingPhrases.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 10000);
    return () => clearInterval(intervalID);
  }, [index]);

  return (
    <div className="loading__container" onClick={onMobileMenuClose}>
      <div className="loading__container-element1">
        <div className="loading__container-element2"></div>
      </div>
      <p className="loading__container-phrase">{loadingPhrases[index]}</p>
    </div>
  );
};

export default Loading;
