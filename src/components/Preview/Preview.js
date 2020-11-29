import React from 'react';

import LogoImg from '../../assets/images/Preview.svg';
import classes from './Preview.module.css';

const preview = () => {
    return(
        <img
            src={LogoImg}
            alt="Weather App Icon"
            className={classes.Preview} />
    );
}

export default preview;
