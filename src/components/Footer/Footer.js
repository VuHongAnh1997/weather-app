import React from 'react';
import Logo from '../../elements/Logo/Logo';

import classes from './Footer.module.css';

const footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <Logo colorScheme='dark' clicked={props.onClickHandler}></Logo>
            <div className={classes.Separator}></div>
        </footer>
    );
}

export default footer;