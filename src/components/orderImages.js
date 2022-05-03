import React, { useState, useContext } from 'react';
import { randNumber } from './randGen.js'; 

export const OrderImages = imageNumber => {
 
    var arr = []; 
    for (var i = 0; i < imageNumber; i++) {
        var redo = true; 
        while (redo) {
            var number = randNumber(imageNumber)
            if (!arr.includes(number)) {
                arr.push(number);
                redo = false; 
            }    
        }
    }
    return arr; 
}
