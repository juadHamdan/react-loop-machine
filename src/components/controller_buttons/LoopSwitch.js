import React, { useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const LoopSwitch = ({selected, handleClick}) => {

    return (  
        <div>
            <ToggleButton
                value="check"
                selected={selected}
                onChange={handleClick}
            >
                <AllInclusiveIcon style={{fontSize: '3rem'}}/>
            </ToggleButton>
        </div>
        )
};

export default LoopSwitch;


