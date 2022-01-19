import React from 'react'

export default function GlobalPage() {

    const player1 = localStorage.getItem('Player1');
    const player2 = localStorage.getItem('Player2');

    return (
        <div className='globalPage_content'>
            <div className='player1'>
                <div className='titleScore'>
                    <p>{player1}</p>
                </div>
                
            </div>

            <div className='player2'>
            <div className='titleScore'>
                    <p>{player2}</p>
                </div>
            </div>
        </div>
    )
}
