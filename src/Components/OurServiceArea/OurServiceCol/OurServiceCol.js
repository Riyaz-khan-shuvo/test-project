import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OurServiceCol = (props) => {

    const { name, service, icon , color } = props.info;

    return (
        <div className="text-center mt-3">
            <div className="h1 text-center" style={{color:`${color}`}}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="mt-3">
                <h6> {name} </h6>
                <p className="mt-3"> {service} </p>
            </div>
        </div>
    );
};

export default OurServiceCol;