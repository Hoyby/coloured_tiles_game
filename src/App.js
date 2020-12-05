import Board from './Board'
import './App.css';

function App() {
  

  function changeColor(id){
      console.log(id)
  }

  return (
    <>
      <Board changeColor={changeColor} colour="red" />
    </>
  )
}

export default App;