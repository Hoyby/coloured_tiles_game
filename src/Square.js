import React from 'react'

export default function Square(square, changeColor) {

    function handleSquareClick(){
        console.log("change colour of tile nr.", square.id)
    }

    return <button class="square" id={square.id} style={{backgroundColor: square.colour}} onClick={handleSquareClick} />
}
