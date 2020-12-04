import React from 'react'

export default function Square(square, changeColor) {

    function handleSquareClick(){
        console.log("hei")
    }

    return <button class="square" id={square.id} style={{backgroundColor: square.colour}} onClick={handleSquareClick} />
}
