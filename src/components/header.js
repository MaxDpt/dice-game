
import React from 'react'
import {useRef, useState} from 'react'

function Header() {

    const player1 = localStorage.getItem('Player1');
    const player2 = localStorage.getItem('Player2');
    var globalVictory1 = localStorage.getItem('GlobalVictory1');
    var globalVictory2 = localStorage.getItem('GlobalVictory2');

// INPUT READING -------------------------------
  const [newPlayer1, setNewPlayer1] = useState('');
  const [newPlayer2, setNewPlayer2] = useState('');
  const handleOnChange1 = (e) => {
    try {
      setNewPlayer1(e.target.value);
    } catch {
      console.log("error") 
    }
  };
  const handleOnChange2 = (e) => {
    try {
      setNewPlayer2(e.target.value);
    } catch {
      console.log("error") 
    }
  };
// ----------------------------------------------

// ADD INPUT IN USER TAB ------------------------
  const formRef = useRef();
  const inputs  = useRef([]);
  const addInputs = el => {
      if(el && !inputs.current.includes(el)) {
          inputs.current.push(el)
      };
  };
// ------------------------------------------------

// BUTTON START -----------------------------------
  const handleForm = async (e) => {
    e.preventDefault()
    if ((inputs.current[1].value.length || inputs.current[2].value.lenght) < 2) {
        console.log('2 characters minimum')
        return;
    } 
    try {
      if (newPlayer1, newPlayer2) {
        localStorage.setItem('Player1', newPlayer1)
        localStorage.setItem('GlobalVictory1', 0);

        localStorage.setItem('Player2', newPlayer2)
        localStorage.setItem('GlobalVictory2', 0);

        formRef.current.reset();
        window.location.reload();
      }
    } 

    catch{
        console.log('error')
    }
  }
//------------------------------------------------

// BUTTON RESTART --------------------------------
  const restart = async (e) => {
      try {
        localStorage.removeItem('Player1');
        localStorage.removeItem('GlobalVictory1');
        localStorage.removeItem('Player2');
        localStorage.removeItem('GlobalVictory2');
        window.location.reload();
      } catch {
          console.log('error')
      }
  }
//------------------------------------------------

    return (
        <div className='header_content'>
        <form ref={formRef} methode='POST' onSubmit={handleForm} className='form'>
          <div className='header_title'>
            <h1>Dice Game</h1>
          </div>

          <div className='resultat_j1'>
            {player1 ? ( 
                <div> 
                  <p>Victory P1: {globalVictory1}</p>      
                </div>
            ) : (
                <div className='input_j1'>
                <label>Name : </label>
                <input ref={addInputs} onChange={handleOnChange1} type='text' placeholder='player 1'/>
                </div>
            )}
          </div>

          <div className='resultat_j2'>
            {player2 ? ( 
                <div>
                  <p>Victory P2: {globalVictory2}</p>  
                </div>
            ) : (
                <div className='input_j2'>
                <label>Name : </label>
                <input ref={addInputs} onChange={handleOnChange2} type='text' placeholder='player 2'/>
                </div>
            )}
          </div>

          <div className='btn_restart'>
            {player1, player2 ? (
                <button onClick={restart} >Exit</button>
            ) : (
                <button type='submit' disabled={!newPlayer1, !newPlayer2}>Start</button>
            )}
          </div>
        </form> 
        </div>
    )
}

export default Header







