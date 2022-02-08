import { useState, useRef } from 'react';
import './App.css';

import tracks from "./tracks";
import Backdrop from './components/Backdrop';
import Channel from "./components/player/Channel";
import Cursor from './components/player/Cursor';
import ControllerButtons from './components/controller_buttons/ControllerButtons';

function App() {
  //const {backendData, getBackendData} = Example()
  //useEffect(() => getBackendData(), []) //only runs on the first render

  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stopSelected, setStopSelected] = useState(false);
  const [loopSelected, setLoopSelected] = useState(false);
  const loopSelectedRef = useRef(false); // so our Channels won't reRender on change 

  const handlePlayClick = () => {
    setStopSelected(false)
    setIsPlaying(isPlaying => !isPlaying)  // Play/Pause toggle
  }

  const handleStopClick = () => {
    setIsPlaying(false)
    setStopSelected(true)
  }

  const handleLoopClick = () => {
    setLoopSelected(loopSelected => !loopSelected)
    loopSelectedRef.current = !loopSelectedRef.current
  }

  return (
    <div className="App">
      <Backdrop
        startingColor="#5f9fff"
        isPlaying={isPlaying}
      />
      <Cursor 
        trackSample={tracks[0]} //prefered to send the length
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        stopSelected={stopSelected}
        trackProgress={trackProgress}
        setTrackProgress = {setTrackProgress}
        loopSelected={loopSelectedRef}
      />
      {tracks?.map((track, index) => {
        return (
          <Channel 
            key={index}
            track={track} 
            trackProgress={trackProgress}
            isPlaying={isPlaying}
            stopSelected={stopSelected}
            loopSelected={loopSelectedRef}
          />
        )
      })}
      <br/>
      <ControllerButtons
        isPlaying={isPlaying}  // Toggle Play, Pause 
        loopSelected={loopSelected}  // Toggle Loop
        handlePlayClick={handlePlayClick}
        handleStopClick={handleStopClick}
        handleLoopClick={handleLoopClick}
      />
    </div>
  );
}

export default App;
