import React from 'react'
import { useState } from 'react';

import Dice1 from './Icon/dice1';
import Dice2 from './Icon/dice2';
import Dice3 from './Icon/dice3';
import Dice4 from './Icon/dice4';
import Dice5 from './Icon/dice5';
import Dice6 from './Icon/dice6';
import IconDice from './Icon/iconDice';
import IconSwitch from './Icon/iconSwitch';
import IconSave from './Icon/iconSave';
import IconTrophy from './Icon/iconTrophy';


export default function GlobalPage() {
// DATA -----------------------------------------
  var gameOver = 5;
  var [winP1, setWinP1] = useState(0);
  var [winP2, setWinP2] = useState(0);
  var [win, setWin] = useState(0);
  var [currentPlayer, setCurrentPlayer] = useState(1);
  var [diceNumber, setDiceNumber] = useState(0);
  var [currentDice, setCurrentDice] = useState(1);
  var [addScore1, setAddScore1] = useState(0);
  var [addScore2, setAddScore2] = useState(0);
  var [saving, setSaving] = useState(0);

  var namePlayer1 = localStorage.getItem('Player1');
  var globalVictory1 = localStorage.getItem('GlobalVictory1');
  var [globalResultP1, setGlobalResultP1] = useState(0);
  var [currentResultP1, setCurrentResultP1] = useState(0);
  
  var namePlayer2 = localStorage.getItem('Player2');
  var globalVictory2 = localStorage.getItem('GlobalVictory2');
  var [globalResultP2, setGlobalResultP2] = useState(0);
  var [currentResultP2, setCurrentResultP2] = useState(0);

// BUTTON RESTART --------------------------------
  const newPlay = async () => {
  try {
    if (namePlayer1 , namePlayer2) {
      window.location.reload(); }
    } catch {
      console.log('error')   };
  };
// -----------------------------------------------
// BUTTON ROLL THE DICE --------------------------
  const rollDice = async () => {
      try {
        if (!win) {
        if (namePlayer1, namePlayer2) {
        setCurrentDice(0);
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
    // Allocation of points
      //Player 1
      if (currentPlayer == 1) {
        var currentDice = diceNumber;
        setCurrentDice(currentDice);
        if (currentDice !== 1) {
        var currentScore = diceNumber;
        setAddScore1(currentScore);
        var currentResult01 = parseInt(currentResultP1) + parseInt(currentScore);
        setCurrentResultP1(parseInt(currentResult01));  }}
    else { //Player 2
        var currentDice = diceNumber;
        setCurrentDice(currentDice);
        if (currentDice !== 1) {
        var currentScore = diceNumber;
        setAddScore2(currentScore);
        var currentResult02 = parseInt(currentResultP2) + parseInt(currentScore);
        setCurrentResultP2(parseInt(currentResult02));    }};
    // Losing number 1
      //Player1
  if (currentPlayer == 1) {
    if (currentDice == 1) {
      setCurrentResultP1(0)
      setCurrentPlayer(0)
    }} //Player2
    if (currentPlayer == 0) {
    if (currentDice == 1) {
      setCurrentResultP2(0)
      setCurrentPlayer(1)
    }}
            } }, 300)   };
        myLoop(15);
      }}} catch {
          console.log('error')   };
};
// -----------------------------------------------
// BUTTON SWITCH PLAYER --------------------------
  const switchPlayer = async () => {
    try {
      if (!win) {
      if (namePlayer1, namePlayer2) {
        if (currentPlayer == 1) {
            setCurrentResultP1(0)
            if (globalResultP1 <= gameOver) {
              setCurrentPlayer(0)
              setSaving(0);
            }
        }
        if (currentPlayer == 0) {
            setCurrentResultP2(0)
            if (globalResultP2 <= gameOver) {
              setCurrentPlayer(1);
              setSaving(0);
            }
        }
        console.log(currentPlayer)
    }}} catch {
        console.log('error')   };
};
// -----------------------------------------------
// BUTTON SAVE SCORE -----------------------------
  const saveScore = async () => {
  try {
    if (!win) {
      if (namePlayer1, namePlayer2) {
        if (currentPlayer == 1) {
            setSaving(1);
            var globalResult01 = parseInt(globalResultP1) + parseInt(currentResultP1) 
            setGlobalResultP1(parseInt(globalResult01))
            setCurrentResultP1(0)
            Winner();
        }
        if (currentPlayer == 0) {
            setSaving(1);
            var globalResult02 = parseInt(globalResultP2) + parseInt(currentResultP2) 
            setGlobalResultP2(parseInt(globalResult02))
            setCurrentResultP2(0)
            Winner();
        }

  }}} catch {
    console.log('error')
  }
};
//------------------------------------------------
// FUNCTION ADD SCORE ANIM -----------------------
AddScore()
  function AddScore() {
  if (addScore1) {
    (function myLoop(i) {
      setTimeout(function() {
        setAddScore1(0)               
        if (--i) myLoop(i);   
      }, 1500)
    })(1);                   
  }
  if (addScore2) {
    (function myLoop(i) {
      setTimeout(function() {
        setAddScore2(0)               
        if (--i) myLoop(i);   
      }, 1500)
    })(1); 
  }
};
// -----------------------------------------------
// FUNCTION WINNER -------------------------------
  function Winner() {
  if (currentPlayer == 1) {
    if (globalResultP1 >= gameOver) {
    setWin(1);
    setWinP1(1);
    var victoryP1 = (parseInt(globalVictory1 ) + 1);
    localStorage.setItem('GlobalVictory1', (parseInt(victoryP1)))
    }}
    if (currentPlayer == 0) {
      if (globalResultP2 >= gameOver) {
      setWin(1);
      setWinP2(1);
      var victoryP2 = (parseInt(globalVictory2) + 1);
      localStorage.setItem('GlobalVictory2', (parseInt(victoryP2)))
      }}
};
//------------------------------------------------

//------------------------------------------------
return (
  <div className={`globalPage_content ${!currentPlayer ? "show-globalPage_content" : "hide-globalPage_content"} `}>
    <div className={`player1 ${currentPlayer ? "show-player1" : "hide-player1"} `}>
      <div className='titleScore'>
        {namePlayer1 ? (
          <div>
            <p>{namePlayer1}</p>
          </div>
        ) : (
          <p>Joueur 1</p> 
        )}
      </div>
      <div className='Score_content'>
        <p>Global Score : {globalResultP1}</p>
        <p>Current Score : {currentResultP1}</p>

        <div className='rollDice_btn'>
          <button onClick={rollDice} disabled={win || saving || !currentPlayer || !namePlayer1}>
            <div className='content-button'>
              <p>Roll dice</p>
              <IconDice />
            </div>
          </button>
        </div>

        <div className='saveScore_btn'>
          <button onClick={saveScore} disabled={win ||!currentPlayer || !namePlayer1}>
            <div className='content-button'>
              <p>Save score</p>
              <IconSave />
            </div>
          </button>
        </div>

        <div className='switchPlayer_btn'>
          <button onClick={switchPlayer} disabled={globalResultP1 >= gameOver || win || !saving ||!currentPlayer || !namePlayer1}>
            <div className='content-button'>
              <p>Switch player</p>
              <IconSwitch />
            </div>
          </button>
        </div>
      </div>
    </div>

    <div className='table'>
        <div className='header_table'>
          <div className={`addScore1 ${addScore1 ? "show-addScore1" : "hide-addScore"} `}>
            <p>+{currentDice}</p> 
          </div>

          <div className={`newPlay_btn ${win ? "show-newPlay_btn" : "hide-newPlay_btn"} `}>
            <button onClick={newPlay} disabled={!win || !namePlayer1 || !namePlayer2}>New play</button>
          </div>
        
          <div className={`addScore2 ${addScore2 ? "show-addScore2" : "hide-addScore"} `}>
            <p>+{currentDice}</p>
          </div> 
        </div>

      { !win ? (
        <div className='dice'>
          {!currentDice ? (
            <div>
              { diceNumber === 1 ? (<div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}><Dice1/></div>) : ( null )}
              { diceNumber === 2 ? (<div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}><Dice2/></div>) : ( null )}
              { diceNumber === 3 ? (<div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}><Dice3/></div>) : ( null )}
              { diceNumber === 4 ? (<div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}><Dice4/></div>) : ( null )}
              { diceNumber === 5 ? (<div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}><Dice5/></div>) : ( null )}
              { diceNumber === 6 ? (<div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}><Dice6/></div>) : ( null )}
            </div>) : null} 

            { currentDice === 1 ? (<div className='currentDice'><Dice1 /></div>) : ( null )}
            { currentDice === 2 ? (<div className='currentDice'><Dice2 /></div>) : ( null )}
            { currentDice === 3 ? (<div className='currentDice'><Dice3 /></div>) : ( null )}
            { currentDice === 4 ? (<div className='currentDice'><Dice4 /></div>) : ( null )}
            { currentDice === 5 ? (<div className='currentDice'><Dice5 /></div>) : ( null )}
            { currentDice === 6 ? (<div className='currentDice'><Dice6 /></div>) : ( null )}
          </div>) : ( null )}

          { winP1 ? (
          <div className={`win ${win ? "show-win" : "hide-win"} `}> <div className='winHead'><p><IconTrophy/></p> <p>{namePlayer1}</p> <p><IconTrophy/></p></div>  <p>win the party !</p> </div>) : ( null)}

          { winP2 ? (
            <div className={`win ${win ? "show-win" : "hide-win"} `}><div className='winHead'><p><IconTrophy/></p> <p>{namePlayer2}</p> <p><IconTrophy/></p></div>  <p>win the party !</p></div>) : ( null)}
    </div>


    <div className={`player2 ${!currentPlayer ? "show-player2" : "hide-player2"} `}>
    <div className='titleScore'>
      {namePlayer2 ? (<p>{namePlayer2}</p>) : (<p>Joueur 2</p>)}
    </div>

    <div className='Score_content'>
      <p>{globalResultP2} : Global Score</p>
      <p>{currentResultP2} : Current Score</p>

      <div className='rollDice_btn'>
        <button onClick={rollDice} disabled={win || saving || currentPlayer || !namePlayer2}>
          <div className='content-button'>
            <IconDice/>
            <p>Roll dice</p>
          </div>
        </button>
      </div>

      <div className='switchPlayer_btn'>
        <button onClick={saveScore} disabled={win || currentPlayer || !namePlayer2}>
        <div className='content-button'>
            <IconSave/>
          <p>Save score</p>
          </div>
        </button>
      </div>

      <div className='switchPlayer_btn'>
        <button onClick={switchPlayer} disabled={globalResultP2 >= gameOver|| !saving || win || currentPlayer || !namePlayer2}>
          <div className='content-button'>
            <IconSwitch/>
            <p>Switch player</p>
          </div>
        </button>
    </div>
  </div>
    </div> 
  </div>
)}
