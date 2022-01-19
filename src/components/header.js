
import React from 'react'
import {useRef, useState} from 'react'

function Header() {

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
        localStorage.setItem('Player2', newPlayer2)
        formRef.current.reset();
      }
    } 

    catch{
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

          <div className='input_j1'>
            <label>nom : </label>
            <input ref={addInputs} onChange={handleOnChange1} type='text' placeholder='Joueur 1'/>
          </div>

          <div className='input_j2'>
            <label>nom : </label>
            <input ref={addInputs} onChange={handleOnChange2} type='text' placeholder='Joueur 1'/>
          </div>

          <div className='btn_start'>
            <button type='submit' disabled={!newPlayer1, !newPlayer2}>Start</button>
          </div>
        </form> 
        </div>
    )
}

export default Header






