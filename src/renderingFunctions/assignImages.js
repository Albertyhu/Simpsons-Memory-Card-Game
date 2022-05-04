
import { CellNumbers } from '../components/cellNumbers.js'; 
import { SetImage } from './setImage.js';

export const AssignImages = (imageArray, imgOrder, handle) => {
    for (var i = 0; i < CellNumbers.length; i++) {
        SetImage(CellNumbers[i], imageArray[imgOrder[i]].image, imageArray[imgOrder[i]].ID, handle)
    }
}