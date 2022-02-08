import React, { useEffect, useRef } from 'react';
import "./styles.css"

const Cursor = ({ trackSample, isPlaying, setIsPlaying, stopSelected, trackProgress, setTrackProgress, loopSelected }) => {
    const { audioSrc } = trackSample

    const audioRef = useRef(new Audio(audioSrc));
    audioRef.current.muted = true;
    const intervalRef = useRef();
    const cursorThumbRef = useRef()
    const { duration } = audioRef.current;
    const currentPercentage = useRef(0)

    currentPercentage.current = (trackProgress / duration) * 100

    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        //check if audio source ended playing
        if (audioRef.current.ended && currentPercentage.current === 100) {
            if(loopSelected.current){
              cursorThumbRef.current.style.left = "0%"
              setIsPlaying(true);
              audioRef.current = new Audio(audioSrc);
              setTrackProgress(audioRef.current.currentTime);
              audioRef.current.play();
              startTimer();
            }
            else{
              setIsPlaying(false);
            }
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [1000]);
    };
  
    const handleCursorChange = (value) => {
      // Clear any timers already running
      setIsPlaying(false)
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    };
  
    const handlePlayOnChange = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    };

  
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } 
      else if(stopSelected){
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);
        cursorThumbRef.current.style.left = "0%"
      }   
      else {
        audioRef.current.pause();
      }
    }, [isPlaying, stopSelected]);
  
  
    useEffect(() => {
      // Pause and clean up on render
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    }, []);
    
    useEffect(() => {
        cursorThumbRef.current.style.left = `${currentPercentage.current}%`
      }, [currentPercentage.current]);   

    return (
        <div>
            <div className="cursor">
                <input
                    type="range"
                    value={trackProgress}
                    step="0.01" 
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => handleCursorChange(e.target.value)}
                    onMouseUp={handlePlayOnChange}
                    onKeyUp={handlePlayOnChange}
                />
            </div>
            <div className="channel">
                <div ref={cursorThumbRef} className="cursor-line"></div>
            </div>
        </div>
    )
};

export default Cursor;
