import React, {FC} from 'react';
import './Loader.scss';

const Loader: FC = () => {
    return (
        <div className="loader-container">
            <div className="loader-wrapper">
                <p className="loader-text">Loading...</p>
                <div className="loader">
                </div>
            </div>
        </div>
    );
};

export default Loader;
