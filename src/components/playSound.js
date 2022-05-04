import Nelson from '../assets/the-simpsons-nelsons-haha.mp3'; 
import Homer from '../assets/homer-woohoo.mp3'; 

const lose = new Audio(Nelson)
const win = new Audio(Homer)

export const PlayLosingSound = () => {
    lose.play(); 
}


export const PlayWinningSound = () => {
    win.play(); 
}