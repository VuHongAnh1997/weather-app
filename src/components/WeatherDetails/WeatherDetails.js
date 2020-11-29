import React from 'react';
import Icon from '../../elements/Icon/Icon';
import Tempature from './Tempature/Tempature';
import Description from './Decription/Decription';
import Date from './Date/Date';

import classes from './WeatherDetail.module.css';

const weatherDetails = (props) => {
    return (
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.description} />
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Tempature degrees={props.data.temperature} />
                <Description type={props.data.description}/>
                <Date />
            </div>
        </div>
    );
}

export default weatherDetails;