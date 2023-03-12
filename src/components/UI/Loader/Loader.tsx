import React, {FC} from 'react';
import classes from './Loader.module.css';

const Loader: FC = () => {
    return (
        <div className={classes.loaderContainer}>
            <div className={classes.wrapper}>
                <p className={classes.text}>Loading...</p>
                <div className={classes.loader}>
                </div>
            </div>
        </div>
    );
};

export default Loader;
