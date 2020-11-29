import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => {
    let logoWithColorsScheme = [
        classes.Logo,
        (props.colorScheme === 'dark') ? classes.Dark : classes.Light
    ];
    return (
        <h1 className={logoWithColorsScheme.join(' ')} onClick={props.clicked}>
            Dự Báo Thời Tiết
        </h1>
    );
}

export default logo;
