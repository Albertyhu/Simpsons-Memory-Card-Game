
import { Collection } from './imageObject.js';


//This function is responsible for storing the images, their ID and their click information in state array
export const Characters = () => {
    var arr = []; 
    var count = 0; 
    Collection.forEach(item => {
        arr.push({
            image: item,
            ID: count, 
            clicked: false, 
        })
        count++; 
    })

    return arr; 
}
