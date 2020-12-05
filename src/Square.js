import React from 'react'


export default function Square(square) {
    const [color, setColor] = React.useState("red");

    
    function changeColor(color){
        switch(color){
            case "red": 
                setColor("green")
                break;
            case "green": 
                setColor("blue")
                break;
            case "blue": 
                setColor("red")
                break;
        }
    }

    function handleSquareClick(){
        changeColor(color)
    }

    return <button class="square" id={square.id} style={{backgroundColor: color}} onClick={handleSquareClick} />   
}


// export default class Square extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//         color: "red",
//         id: props.id
//         }
//     }

//     render() {
//         return <button class="square" id={this.state.id} style={{backgroundColor: this.state.color}} onClick={() => this.setState({ color: "blue"})} />   
//     }
// }