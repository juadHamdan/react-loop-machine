import React, { useEffect } from "react";
import PropTypes from 'prop-types'

const Backdrop = ({ startingColor, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", startingColor);
  }, []);

  return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};

Backdrop.propTypes = {
  startingColor: PropTypes.string,
  isPlaying: PropTypes.bool
}

export default Backdrop;
