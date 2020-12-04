import React from 'react'

export default function Square(square, changeColor) {

    function handleSquareClick(){
        return null
    }

    return <button class="square" id={square.id} style={{backgroundColor: square.color}} onClick={handleSquareClick} />
}
