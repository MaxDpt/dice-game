import React from 'react'
import { useState } from 'react';

export default function GlobalPage() {
// DATA -----------------------------------------
  var gameOver = 50;
  var [winP1, setWinP1] = useState(0);
  var [winP2, setWinP2] = useState(0);
  var [win, setWin] = useState(0);
  var [currentPlayer, setCurrentPlayer] = useState(1);
  var [diceNumber, setDiceNumber] = useState(0);
  var [currentDice, setCurrentDice] = useState(0);
  var [addScore1, setAddScore1] = useState(0);
  var [addScore2, setAddScore2] = useState(0);
  var [saving, setSaving] = useState(0);

  var namePlayer1 = localStorage.getItem('Player1');
  var globalVictory1 = localStorage.getItem('GlobalVictory1');
  var [globalResultP1, setGlobalResultP1] = useState(0)
  var [currentResultP1, setCurrentResultP1] = useState(0)
  
  var namePlayer2 = localStorage.getItem('Player2');
  var globalVictory2 = localStorage.getItem('GlobalVictory2');
  var [globalResultP2, setGlobalResultP2] = useState(0)
  var [currentResultP2, setCurrentResultP2] = useState(0)

// -----------------------------------------------

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
            setAddScore1(currentScore)
            console.log(diceNumber)
            var currentResult01 = parseInt(currentResultP1) + parseInt(currentScore)
            console.log(parseInt(currentResultP1), '+', parseInt(currentScore), '=', parseInt(currentResult01)  )
            setCurrentResultP1(parseInt(currentResult01));  }}
        else {
            var currentDice = diceNumber
            setCurrentDice(currentDice)
            if (currentDice !== 1) {
            var currentScore = diceNumber
            setAddScore2(currentScore)
            console.log('dice :',diceNumber)
            var currentResult02 = parseInt(currentResultP2) + parseInt(currentScore)
            console.log(parseInt(currentResultP2), '+', parseInt(currentScore), '=', parseInt(currentResult02))
            setCurrentResultP2(parseInt(currentResult02));    }};
    // losing number 1
            if (currentPlayer == 1) {
            if (currentDice == 1) {
              setCurrentResultP1(0)
              var Player = 0;
              setCurrentPlayer(Player)
            }}
            if (currentPlayer == 0) {
            if (currentDice == 1) {
              setCurrentResultP2(0)
              var Player = 1;
              setCurrentPlayer(Player)
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
            var globalResult01 = parseInt(globalResultP1) + parseInt(currentResultP1) 
            setGlobalResultP1(parseInt(globalResult01))
            setCurrentResultP1(0)
            if (globalResultP1 <= gameOver) {
              var Player = 0;
              setCurrentPlayer(Player)
              var save = 0;
              setSaving(parseInt(save));
            }
        }
        if (currentPlayer == 0) {
            var globalResult02 = parseInt(globalResultP2) + parseInt(currentResultP2) 
            setGlobalResultP2(parseInt(globalResult02))
            setCurrentResultP2(0)
            if (globalResultP2 <= gameOver) {
              var Player = 1;
              setCurrentPlayer(Player)
              var save = 0;
              setSaving(parseInt(save));
            }
        }
        console.log(currentPlayer)
    }}} catch {
        console.log('error')   };
}
// -----------------------------------------------
// BUTTON SAVE SCORE -----------------------------
const saveScore = async () => {
  try {
    if (!win) {
      if (namePlayer1, namePlayer2) {
        if (currentPlayer == 1) {
            var save = 1;
            setSaving(parseInt(save));
            var globalResult01 = parseInt(globalResultP1) + parseInt(currentResultP1) 
            setGlobalResultP1(parseInt(globalResult01))
            setCurrentResultP1(0)
            if (globalResultP1 >= gameOver) {
            var winner = 1;
            setWin(winner);
            var winnerP1 = 1;
            setWinP1(winnerP1);
            var victoryP1 = (parseInt(globalVictory1 ) + 1);
            localStorage.setItem('GlobalVictory1', (parseInt(victoryP1)))
            }
        }
        if (currentPlayer == 0) {
            var save = 1;
            setSaving(parseInt(save));
            var globalResult02 = parseInt(globalResultP2) + parseInt(currentResultP2) 
            setGlobalResultP2(parseInt(globalResult02))
            setCurrentResultP2(0)
            if (globalResultP2 >= gameOver) {
            var winner = 1;
            setWin(winner);
            var winnerP2 = 1;
            setWinP2(winnerP2);
            var victoryP2 = (parseInt(globalVictory2) + 1);
            localStorage.setItem('GlobalVictory2', (parseInt(victoryP2)))
            }
        }

  }}} catch {
    console.log('error')
  }
}
//------------------------------------------------
// ADD SCORE ANIM --------------------------------
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
}
// -----------------------------------------------

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
              <button onClick={rollDice} disabled={win || saving || !currentPlayer || !namePlayer1}>Roll dice</button>
            </div>

            <div className='switchPlayer_btn'>
              <button onClick={saveScore} disabled={win ||!currentPlayer || !namePlayer1}>Save score</button>
            </div>

            <div className='switchPlayer_btn'>
              <button onClick={switchPlayer} disabled={globalResultP1 >= gameOver || win || !saving ||!currentPlayer || !namePlayer1}>Switch player</button>
            </div>
          </div>
        </div>

      <div className='table'>
        <div className='header_table'>
          <div className={`addScore1 ${addScore1 ? "show-addScore1" : "hide-addScore"} `}>
          <p>+{currentDice}</p> 
          </div>

        <div className='newPlay_btn'>
          <button onClick={newPlay} disabled={!win || !namePlayer1 || !namePlayer2}>New play</button>
        </div>
        
        <div className={`addScore2 ${addScore2 ? "show-addScore2" : "hide-addScore"} `}>
        <p>+{currentDice}</p>
        </div>) 
        </div>

        { !win ? (
          <div className='dice'>
          {!currentDice ? (
          <div>
          {diceNumber === 1 ? (
          <div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}>
            <img src={require('../style/images/dice1.png')}/>
          </div>
          ) : ( null
          )}
          {diceNumber === 2 ? (
          <div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}>
            <img src={require('../style/images/dice2.png')}/>
          </div>
          ) : ( null
          )}
          {diceNumber === 3 ? (
          <div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}>
            <img src={require('../style/images/dice3.png')}/>
          </div>
          ) : ( null
          )}
          {diceNumber === 4 ? (
          <div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}>
            <img src={require('../style/images/dice4.png')}/>
          </div>
          ) : ( null
          )}
          {diceNumber === 5 ? (
          <div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}>
            <img src={require('../style/images/dice5.png')}/>
          </div>
          ) : ( null
          )}
          {diceNumber === 6 ? (
          <div className={`dice ${diceNumber || currentDice != 0 ? "show-dice" : "hide-dice"} `}>
            <img src={require('../style/images/dice6.png')}/>
          </div>
          ) : ( null
          )}
          </div>
          ) : null}

          { currentDice === 1 ? (
          <div className='currentDice'>
            <img src={require('../style/images/dice1.png')}/>
          </div>
          ) : ( null
          )}
          { currentDice === 2 ? (
          <div className='currentDice'>
            <img src={require('../style/images/dice2.png')}/>
          </div>
          ) : ( null
          )}
          { currentDice === 3 ? (
          <div className='currentDice'>
            <img src={require('../style/images/dice3.png')}/>
          </div>
          ) : ( null
          )}
          { currentDice === 4 ? (
          <div className='currentDice'>
            <img src={require('../style/images/dice4.png')}/>
          </div>
          ) : ( null
          )}
          { currentDice === 5 ? (
          <div className='currentDice'>
            <img src={require('../style/images/dice5.png')}/>
          </div>
          ) : ( null
          )}
          { currentDice === 6 ? (
          <div className='currentDice'>
            <img src={require('../style/images/dice6.png')}/>
          </div>
          ) : ( null
          )}
          </div>
        ) : ( null
        )}

        { winP1 ? (
          <div className={`win ${win ? "show-win" : "hide-win"} `}>
            <p>{namePlayer1} <br/> win the party !</p>
          </div>
        ) : ( null
        )}
        { winP2 ? (
          <div className={`win ${win ? "show-win" : "hide-win"} `}>
            <p>{namePlayer2} <br/> win the party !</p>
          </div>
        ) : ( null
        )}
      </div>

      <div className={`player2 ${!currentPlayer ? "show-player2" : "hide-player2"} `}>
        <div className='titleScore'>
          {namePlayer2 ? (<p>{namePlayer2}</p>) : (<p>Joueur 2</p>)}
        </div>

        <div className='Score_content'>
          <p>{globalResultP2} : Global Score</p>
          <p>{currentResultP2} : Current Score</p>
        <div className='rollDice_btn'>
          <button onClick={rollDice} disabled={win || saving || currentPlayer || !namePlayer2}>Roll dice</button>
        </div>
        <div className='switchPlayer_btn'>
          <button onClick={saveScore} disabled={win || currentPlayer || !namePlayer2}>Save score</button>
        </div>
        <div className='switchPlayer_btn'>
          <button onClick={switchPlayer} disabled={globalResultP2 >= gameOver|| !saving || win || currentPlayer || !namePlayer2}>Switch player</button>
        </div>
      </div>
    </div> 
  </div>

    )
}
