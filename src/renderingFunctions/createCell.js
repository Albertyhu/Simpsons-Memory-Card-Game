import React from 'react';
import { MyContext } from '../components/contextItem.js'; 

export const RenderCell = props => {

    const {image, clickImage, ID } = props; 

    return (
        <div>
            <img source={image} className='image' onClick={() => { clickImage(ID)}} />
        </div>
        )
}