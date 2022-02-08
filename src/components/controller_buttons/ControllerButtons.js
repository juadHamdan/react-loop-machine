import FAButton from './FAButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LoopSwitch from './LoopSwitch';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';

const ControllerButtons = ({ isPlaying, loopSelected, handlePlayClick, handleStopClick, handleLoopClick }) => {
    return( 
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <FAButton 
          color="primary"
          onClick={handlePlayClick}
          icon={isPlaying? <PauseIcon/> : <PlayArrowIcon/>}
        />
        <FAButton 
          color="secondary"
          onClick={handleStopClick}
          icon={<StopIcon/>}
        />
        <LoopSwitch
         selected={loopSelected}
         handleClick={handleLoopClick}
        />
      </Stack>
    </div>
    )
};

export default ControllerButtons;
