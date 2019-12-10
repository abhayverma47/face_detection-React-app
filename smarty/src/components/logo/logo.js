import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import eagle from './logo1.png';


const Logo = () => {
    return (
        <div className=' mto'>
            <Tilt className="Tilt br2 shadow-2 ml4" options={{ max: 55 }} style={{ height: 150, width: 150, }} >
                <div className="Tilt-inner">
                    <img alt="logo" src={eagle} />
                </div>
            </Tilt>
        </div>
    );
}


export default Logo;