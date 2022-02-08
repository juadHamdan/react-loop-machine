import React from 'react';
import { Fab } from '@mui/material';
import PropTypes from 'prop-types'

const FAButton = ({ color, onClick, icon }) => {
  return (  
    <div>
        <Fab 
            color={color}
            onClick={onClick}
        >
            {icon}
        </Fab>
    </div>)
};

FAButton.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.node
}

export default FAButton;


