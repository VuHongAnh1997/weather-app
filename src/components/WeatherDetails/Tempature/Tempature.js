import React from 'react';

import classes from './Tempature.module.css';

const tempature = (props) => {
    return (
        <div className={classes.TemperatureWrapper}>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default tempature;