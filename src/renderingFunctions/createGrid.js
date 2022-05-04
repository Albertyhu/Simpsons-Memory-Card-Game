import React, {  useContext, useEffect } from 'react'; 
import { MyContext } from '../components/contextItem.js'; 

import { AssignImages } from './assignImages.js'; 

const RenderGrid = props => {
    const { clickImage, checkClicked, clickWrongImg, randomizePos, reset, getImageArray, getImageOrder} = useContext(MyContext); 

    var arr = getImageArray(); 
    var imgOrder = getImageOrder(); 

    const handleClick = (ID) => {
        if (checkClicked(ID)) {
            clickWrongImg();
            reset();
        }
        else {
            clickImage(ID);
        }
        randomizePos();
    }

    useEffect(() => {
        AssignImages(arr, imgOrder, handleClick);
    }, [getImageOrder()])

    return (

        <div id = "grid">
            <div className = "row" id = "row1">
                <div className="cell"><img alt = "character"  className="image" id="A1"  /> </div> <div className="cell"><img alt = "character"  className="image" id="A2" /> </div> <div className="cell"><img alt = "character"  className="image" id="A3" /> </div> <div className="cell"><img alt = "character"  className="image" id="A4" /> </div>
            </div>
            <div className="row" id="row2">
                <div id="A1" className="cell"><img alt = "character"  className="image" id="B1" /> </div> <div className="cell"><img alt = "character"  className="image" id="B2" /> </div> <div className="cell"><img alt = "character"  className="image" id="B3" /> </div> <div className="cell"><img alt = "character"  className="image" id="B4" /> </div>
            </div>
            <div className="row" id="row3">
                <div className="cell"><img alt = "character"  className="image" id="C1" /> </div> <div className="cell"><img alt = "character"  className="image" id="C2" /> </div> <div className="cell"><img alt = "character"  className="image" id="C3" /> </div> <div className="cell"><img alt = "character"  className="image" id="C4" /> </div>
            </div>
        </div> 
        )
}

export default RenderGrid; 