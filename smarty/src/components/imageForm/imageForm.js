import React from 'react';
import './imageForm.css';

const ImageForm = ({ oninputchange, onsubmit }) => {
    return (
        <div >
            <p className="f3 center white">
                {'This Magical Unicorn detects faces'}
            </p>
            <div className='center' width="700px">
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2  w-70 center' type='text' onChange={oninputchange} />
                    <button className='w-30 f4 link ph3 pv2 dib white grow ' style={{ backgroundColor: 'RGBA(84, 84, 84, 1)' }} onClick={onsubmit}>detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageForm;