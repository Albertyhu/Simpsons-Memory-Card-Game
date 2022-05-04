import React, { useState, useEffect } from 'react'; 

import { MyContext } from './components/contextItem.js';
import { OrderImages } from './components/orderImages.js'; 

import { Characters } from './components/createImageArray.js'; 
import RenderGrid from './renderingFunctions/createGrid.js';

const App = () => {
    var arr = Characters(); 
    var imgOdr = OrderImages(12); 
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0); 
    const [imageOrder, setImageOrder] = useState(imgOdr); 
    const [imageArray, setImageArray] = useState(arr); 
    const [gamePoint, setGamePoint] = useState(12); 

    const context = {
        getImageOrder: () => {
            return imageOrder; 
        },
        //randomizes the positions of the images 
        randomizePos: () => {
            var tempArr = []; 
            var isDuplicate;
            do {
                isDuplicate = true; 
                tempArr = OrderImages(12);
                for (var i = 0; i < tempArr.length; i++) {
                    if (tempArr[i] !== imageOrder[i]) {
                        isDuplicate = false;
                    }
                }
            } while (isDuplicate); 

            setImageOrder(tempArr)
        },
        getImageArray: () => {
            return imageArray; 
        },
        reset: () => {
            var tempArr = [...imageArray];
            tempArr.forEach(item => {
                item.clicked = false; 
            })
            setImageArray([...tempArr]); 
        },
        clickImage: (imageID) => {
            var tempArr = [...imageArray]; 
            tempArr.forEach(item => {
                if (item.ID === imageID) {
                    item.clicked = true; 
                }
            })
            setImageArray([...tempArr]);
            setScore(score + 1); 

        },
        clickWrongImg: () => {
            setScore(0);
            alert("You've clicked on that image already. Try again and git gud.")
        }, 
        checkClicked: (imageID) => {
            var targetObject = imageArray.filter(val => val.ID === imageID)
            return targetObject[0].clicked; 
        },
        getScore: () => { return score },
    }

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);

        }
        if (score >= gamePoint) {
            alert("Great job! You got all 12. Let's see if you can continue your streak.")
            setGamePoint(gamePoint * 2)
            context.reset(); 
        }
    }, [score])

    return (
        <MyContext.Provider value={context}>
            <div className="App">

                <div id="titleContainer">
                    <div id = "mainTitle">The Simpsons Memory Card Game</div>
                </div>
                <div id = "instructionContainer"><p id = "instruction">The object of this game is to click on each card once to score one point and to try get the highest score. If you click on a card more than once, you lose the game and the score resets to zero.</p></div>
                <div id="scoreContainer">
                    <div id="score">Score: {score}</div>
                    <div id="bestScore">Best: {bestScore} </div>
                </div>
                <div id="gridContainer" >
                    <RenderGrid />
                </div>
            </div>
        </MyContext.Provider>
    );
}

export default App;
