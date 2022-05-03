import React, { useState, useContext, useEffect } from 'react'; 
import { RenderCell } from './createCell'; 
import { MyContext } from '../components/contextItem.js'; 
import { Collection } from '../components/imageObject.js'; 
import { SetImage } from './setImage.js'; 
import { AssignImages } from './assignImages.js'; 

const RenderGrid = props => {
    const { getScore, clickImage, checkClicked, clickWrongImg, randomizePos, reset, getImageArray, getImageOrder} = React.useContext(MyContext); 

    var arr = getImageArray(); 
    var imgOrder = getImageOrder(); 

    const sampleMessage = message => alert(message)

    const handleClick = (ID) => {

      
        
        if (checkClicked(ID)) {
            clickWrongImg();
            reset();
            console.log("Image has already been clicked")
        }
        else {
            clickImage(ID);

            console.log("Image has just been clicked")
        }
        randomizePos();
    }

    useEffect(() => {
        AssignImages(arr, imgOrder, handleClick);
    }, [getImageOrder()])



    return (

        <div id = "grid">
            <div className = "row" id = "row1">
                <div className="cell"><img className="image" id="A1" /> </div> <div className="cell"><img className="image" id="A2" /> </div> <div className="cell"><img className="image" id="A3" /> </div> <div className="cell"><img className="image" id="A4" /> </div>
            </div>
            <div className="row" id="row2">
                <div id="A1" className="cell"><img className="image" id="B1" /> </div> <div className="cell"><img className="image" id="B2" /> </div> <div className="cell"><img className="image" id="B3" /> </div> <div className="cell"><img className="image" id="B4" /> </div>
            </div>
            <div className="row" id="row3">
                <div className="cell"><img className="image" id="C1" /> </div> <div className="cell"><img className="image" id="C2" /> </div> <div className="cell"><img className="image" id="C3" /> </div> <div className="cell"><img className="image" id="C4" /> </div>
            </div>
        </div> 
        )
}

export default RenderGrid; 