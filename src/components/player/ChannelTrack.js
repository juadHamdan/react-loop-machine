import "./styles.css";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

const ChannelTrack = ({title, color, handleMute}) => {
    return(
        <div style={{backgroundColor: color}} className="channel">
            <h2 className="title">{title}</h2>
            <Stack 
                direction="row" 
                spacing={0} 
                alignItems="center"
            >
                <Switch onClick={handleMute} />
                <strong style={{paddingBottom: '4px'}}>mute</strong>
            </Stack>
        </div>
    ) 
};

export default ChannelTrack;
