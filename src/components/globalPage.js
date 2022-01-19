import React from 'react'
import { useState } from 'react';

export default function GlobalPage() {
// LOCAL PLAYER ----------------------------------
  const namePlayer1 = localStorage.getItem('Player1');
  const namePlayer2 = localStorage.getItem('Player2');
//------------------------------------------------

// BUTTON RESTART --------------------------------
  const [globalScore1, setGlobalScore1] = useState();
  const [currentScore1, setCurrentScore1] = useState();

  const [globalScore2, setGlobalScore2] = useState();
  const [currentScore2, setCurrentScore2] = useState();

  const newPlay = async () => {
    try {
        const globalScore1 = 0;
        const currentScore1 = 0;
        const globalScore2 = 0;
        const currentScore2 = 0;

        setGlobalScore1(globalScore1);
        setCurrentScore1(currentScore1);

        setGlobalScore2(globalScore2);
        setCurrentScore2(currentScore2)

    } catch {
        console.log('error')
    }
}
//------------------------------------------------

    return (
        <div className='globalPage_content'>
            <div className='player1'>
                <div className='titleScore'>
                    <p>{namePlayer1}</p>
                </div>
                <div className='Score_content'>
                    <p>globalScore : {globalScore1}</p>
                    <p>currentScore : {currentScore1}</p>
                </div>
            </div>

            <div className='table'>
                <div className='newPlay_btn'>
                    <button onClick={newPlay}>New play</button>
                </div>
            </div>

            <div className='player2'>
                <div className='titleScore'>
                    <p>{namePlayer2}</p>
                </div>
                <div className='Score_content'>
                    <p>globalScore : {globalScore1}</p>
                    <p>currentScore : {currentScore1}</p>
                </div>
            </div>
        </div>
    )
}
