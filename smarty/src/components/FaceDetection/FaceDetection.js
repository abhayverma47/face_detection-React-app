import React from 'react';

const FaceDetection = ({ image }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img alt='face' src={image} width="500px" height="auto" />
            </div>


        </div>
    );
}

export default FaceDetection;