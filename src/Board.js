import React from 'react'
import Square from './Square'

export default function Board({ changeColor }) {
    return ( 

        <div class="board">
            <div class="row">
                <Square id="1" changeColor={changeColor} />
                <Square id="2" changeColor={changeColor} />
                <Square id="3" changeColor={changeColor} />
            </div>
            
            <div class="row">
                <Square id="4" changeColor={changeColor} />
                <Square id="5" changeColor={changeColor} color="blue" />
                <Square id="6" changeColor={changeColor} />
            </div>

            <div class="row">
                <Square id="7" changeColor={changeColor} />
                <Square id="8" changeColor={changeColor} />
                <Square id="9" changeColor={changeColor} />
            </div>
        </div>
        
        )
}