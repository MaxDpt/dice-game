import React from 'react'
import { useState } from 'react';

export default function GlobalPage() {
// DATA -----------------------------------------
  var [currentPlayer, setCurrenPlayer] = useState(1);
  var [diceNumber, setDiceNumber] = useState(0);
  var [currentDice, setCurrentDice] = useState(0);

  var namePlayer1 = localStorage.getItem('Player1');
  var [globalScore1, setGlobalScore1] = useState(0);
  var [currentScore1, setCurrentScore1] = useState(0);
  var currentResult1 = localStorage.getItem('CurrentScore1');
  var globalResult1 = localStorage.getItem('GlobalScore1');
  
  var namePlayer2 = localStorage.getItem('Player2');
  var [globalScore2, setGlobalScore2] = useState(0);
  var [currentScore2, setCurrentScore2] = useState(0);
  var currentResult2 = localStorage.getItem('CurrentScore2');
  var globalResult2 = localStorage.getItem('GlobalScore2');
// -----------------------------------------------

// BUTTON RESTART --------------------------------
  const newPlay = async () => {
    try {
      if (namePlayer1 , namePlayer2) {

        localStorage.setItem('CurrentScore1', 0)
        localStorage.setItem('GlobalScore1', 0)
        localStorage.setItem('CurrentScore2', 0)
        localStorage.setItem('GlobalScore2', 0)

        setGlobalScore1(localStorage.getItem('CurrentScore1'));
        setCurrentScore1(localStorage.getItem('GlobalScore1'));

        setGlobalScore2(localStorage.getItem('CurrentScore2'));
        setCurrentScore2(localStorage.getItem('GlobalScore2'));

        window.location.reload();
      }
    } catch {
        console.log('error')
    }
}
// BUTTON ROLL THE DICE --------------------------
  const rollDice = async () => {
      try {
        var currentDice = 0;
        setCurrentDice(currentDice);
    // Random number generation
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min +1)) + min;   };
        var i = 1;  
    // Result Loop
        function myLoop(i) {       
          setTimeout(function() { 
            var diceNumber = getRandomInt(1,6);
            setDiceNumber(diceNumber);                             
            if (--i +1) myLoop(i); 
            if (i == 0) {
    // allocation of points
                if (currentPlayer == 1) {
                    var currentDice = diceNumber
                    setCurrentDice(currentDice)
                    var currentScore = diceNumber
                    console.log(diceNumber)
                    var currentResult01 = parseInt(currentResult1) + parseInt(currentScore)
                    console.log(parseInt(currentResult1), '+', parseInt(currentScore), '=', parseInt(currentResult01)  )
                    localStorage.setItem('CurrentScore1', (parseInt(currentResult01)))   };
                if (currentPlayer == 2) {
                    var currentDice = diceNumber
                    setCurrentDice(currentDice)
                    var currentScore = diceNumber
                    console.log('dice :',diceNumber)
                    var currentResult02 = parseInt(currentResult2) + parseInt(currentScore)
                    console.log(parseInt(currentResult2), '+', parseInt(currentScore), '=', parseInt(currentResult02))
                    localStorage.setItem('CurrentScore2', (parseInt(currentResult02)))   };
            } }, 200)   };

        myLoop(40);
      } catch {
          console.log('error')
      }
  }
// -----------------------------------------------

    return (
        <div className='globalPage_content' >
            <div className={`player1 ${namePlayer1 ? "show-player1" : "hide-player"} `}>
                <div className='titleScore'>
                    <p>{namePlayer1}</p>
                </div>
                <div className='Score_content'>
                    <p>Global Score : {globalResult1}</p>
                    <p>Current Score : {currentResult1}</p>
                </div>
            </div>

            <div className='table'>
                <div className='newPlay_btn'>
                    <button onClick={newPlay} disabled={!namePlayer1, !namePlayer2}>New play</button>
                </div>

                <div className='rollDice_btn'>
                    <button onClick={rollDice} disabled={!namePlayer1, !namePlayer2}>Roll dice</button>
                </div>

                <div className='dice'>
                    {currentDice ? (<p>{currentDice}</p>) : (<p>{diceNumber}</p>)}
                </div>
            </div>

            <div className={`player2 ${namePlayer2 ? "show-player2" : "hide-player"} `}>
                <div className='titleScore'>
                    <p>{namePlayer2}</p>
                </div>
                <div className='Score_content'>
                    <p>{globalResult2} : Global Score</p>
                    <p>{currentResult2} : Current Score</p>
                </div>
            </div>
        </div>
    )
}
