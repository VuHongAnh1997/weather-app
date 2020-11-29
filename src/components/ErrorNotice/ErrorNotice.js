import React from 'react';
import Button from '../../elements/Button/Button';

import classes from './ErrorNotice.module.css';

const errorNotice = (props) => {
    return(
        <div className={classes.ErrorNoticeWrapper}>
            <h1 className={classes.NotFound404}>404</h1>
            <div className={classes.ErrorTextWrapper}>
                <h2 className={classes.NotFoundHeading}>Opps!</h2>
                <p className={classes.NotFoundDetails}>You can't find city we are looking for</p>
                <Button 
                    name="tryAgain"
                    type="button"
                    position="onErrorNotice"
                    clicked={props.onClickHandler}>Try Again</Button>
            </div>
        </div>
    );
}

export default errorNotice;