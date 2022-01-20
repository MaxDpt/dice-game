import React from 'react'
import { useState } from 'react';

export default function GlobalPage() {
// DATA -----------------------------------------
  var [winP1, setWinP1] = useState(0);
  var [winP2, setWinP2] = useState(0);
  var [currentPlayer, setCurrentPlayer] = useState(1);
  var [diceNumber, setDiceNumber] = useState(0);
  var [currentDice, setCurrentDice] = useState(0);

  var namePlayer1 = localStorage.getItem('Player1');
  var currentResult1 = localStorage.getItem('CurrentScore1');
  var globalResult1 = localStorage.getItem('GlobalScore1');
  var globalVictory1 = localStorage.getItem('GlobalVictory1');
  
  var namePlayer2 = localStorage.getItem('Player2');
  var currentResult2 = localStorage.getItem('CurrentScore2');
  var globalResult2 = localStorage.getItem('GlobalScore2');
  var globalVictory2 = localStorage.getItem('GlobalVictory2');
// -----------------------------------------------

// BUTTON RESTART --------------------------------
  const newPlay = async () => {
    try {
      if (namePlayer1 , namePlayer2) {
        localStorage.setItem('CurrentScore1', 0)
        localStorage.setItem('GlobalScore1', 0)
        localStorage.setItem('CurrentScore2', 0)
        localStorage.setItem('GlobalScore2', 0)
        window.location.reload();   }
    } catch {
        console.log('error')   };
  };
// -----------------------------------------------

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
    // Result Loop
        var i = 1; 
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
            if (currentDice !== 1) {
            var currentScore = diceNumber
            console.log(diceNumber)
            var currentResult01 = parseInt(currentResult1) + parseInt(currentScore)
            console.log(parseInt(currentResult1), '+', parseInt(currentScore), '=', parseInt(currentResult01)  )
            localStorage.setItem('CurrentScore1', (parseInt(currentResult01)))   }}
        else {
            var currentDice = diceNumber
            setCurrentDice(currentDice)
            if (currentDice !== 1) {
            var currentScore = diceNumber
            console.log('dice :',diceNumber)
            var currentResult02 = parseInt(currentResult2) + parseInt(currentScore)
            console.log(parseInt(currentResult2), '+', parseInt(currentScore), '=', parseInt(currentResult02))
            localStorage.setItem('CurrentScore2', (parseInt(currentResult02)))   }};
    // losing number
            if (currentPlayer == 1) {
            if (currentDice == 1) {
              localStorage.setItem('CurrentScore1', 0)
              var Player = 0;
              setCurrentPlayer(Player)
            }}
            if (currentPlayer == 0) {
            if (currentDice == 1) {
              localStorage.setItem('CurrentScore2', 0)
              var Player = 1;
              setCurrentPlayer(Player)
            }}
            } }, 200)   };
        myLoop(40);
      } catch {
          console.log('error')   };
  };
// -----------------------------------------------

// BUTTON SWITCH PLAYER --------------------------
  const switchPlayer = async () => {
    try {
        if (currentPlayer == 1) {
            var Player = 0;
            setCurrentPlayer(Player)
            var globalResult01 = parseInt(globalResult1) + parseInt(currentResult1) 
            localStorage.setItem('GlobalScore1', (parseInt(globalResult01)))
            localStorage.setItem('CurrentScore1', 0)
        }
        if (currentPlayer == 0) {
            var Player = 1;
            setCurrentPlayer(Player)
            var globalResult02 = parseInt(globalResult2) + parseInt(currentResult2) 
            localStorage.setItem('GlobalScore2', (parseInt(globalResult02)))
            localStorage.setItem('CurrentScore2', 0)
        }
        console.log(currentPlayer)
    } catch {
        console.log('error')   };
}
// -----------------------------------------------


//------------------------------------------------

    return (
        <div className='globalPage_content'>
            <div className={`player1 ${currentPlayer ? "show-player1" : "hide-player"} `}>
                <div className='titleScore'>
                {namePlayer1 ? (
                    <div>
                    <p>{namePlayer1}</p>
                    </div>
                ) : (<p>Joueur 1</p>)}
                </div>
                <div className='Score_content'>
                    <p>Global Score : {globalResult1}</p>
                    <p>Current Score : {currentResult1}</p>
                    <div className='rollDice_btn'>
                    <button onClick={rollDice} disabled={!currentPlayer}>Roll dice</button>
                </div>

                <div className='switchPlayer_btn'>
                    <button onClick={switchPlayer} disabled={!currentPlayer}>Switch player</button>
                </div>
                </div>
            </div>

            <div className='table'>
                <div className='newPlay_btn'>
                    <button onClick={newPlay} disabled={!namePlayer1, !namePlayer2}>New play</button>
                </div>

                <div className='dice'>
                    {currentDice ? (<p>{currentDice}</p>) : (<p>{diceNumber}</p>)}
                </div>
            </div>

            <div className={`player2 ${!currentPlayer ? "show-player2" : "hide-player"} `}>
                <div className='titleScore'>
                    {namePlayer2 ? (<p>{namePlayer2}</p>) : (<p>Joueur 2</p>)}
                </div>

                <div className='Score_content'>
                  <p>{globalResult2} : Global Score</p>
                  <p>{currentResult2} : Current Score</p>
                  <div className='rollDice_btn'>
                    <button onClick={rollDice} disabled={currentPlayer}>Roll dice</button>
                  </div>
                  <div className='switchPlayer_btn'>
                    <button onClick={switchPlayer} disabled={currentPlayer}>Switch player</button>
                  </div>
                </div>
            </div>
                  
            
        </div>

    )
}
