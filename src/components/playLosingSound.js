import Nelson from '../assets/the-simpsons-nelsons-haha.mp3'; 

const sound = new Audio(Nelson)

export const PlayAudio = () => {
    sound.play(); 
}