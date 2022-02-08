import React, { useEffect, useRef } from "react";
import ChannelTrack from "./ChannelTrack";

const Channel = ({ track, trackProgress, isPlaying, stopSelected, loopSelected }) => {
  const { title, color, audioSrc } = track

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      //restart when loop is selected
      if (audioRef.current.ended) {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        if(loopSelected.current){
          audioRef.current.play();
          startTimer();
        }
      }
    }, [1000]);
  };

  // Communicating with the Cursor component and the controller states
  useEffect(() => {
    //check if audio should ended
    if(audioRef.current.currentTime === trackProgress && trackProgress !== 0)
      return

    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    }
    else if(stopSelected){
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
    }
    else //
    {
      audioRef.current.pause();
      audioRef.current.currentTime = trackProgress
    }
  }, [isPlaying, stopSelected, trackProgress]);


  const handleMute = () => {
    audioRef.current.muted = !audioRef.current.muted
  }

  return (
      <ChannelTrack
        title={title}
        color={color}
        handleMute={handleMute}
      />
  );
};

export default Channel;
