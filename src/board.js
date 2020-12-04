import React from 'react'
import Square from './Square'

export default function Board({ squares, changeColor }) {
    return ( 
        <div class="board">
            <div class="row">
                <Square id="1" onclick={changeColor} />
                <Square id="2" onclick={changeColor} />
                <Square id="3" onclick={changeColor} />
            </div>
            
            <div class="row">
                <Square id="4" onclick={changeColor} />
                <Square id="5" onclick={changeColor} colour="red" />
                <Square id="6" onclick={changeColor} />
            </div>

            <div class="row">
                <Square id="7" onclick={changeColor} />
                <Square id="8" onclick={changeColor} />
                <Square id="9" onclick={changeColor} />
            </div>
        </div>
        
        )
}
