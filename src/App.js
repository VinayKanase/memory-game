import { useState } from 'react';
import './css/App.css';
// import { returnNames } from './helpers';
import Score from './components/Score';
import Cards from './components/Cards';
import createCharList from './helpers';

function App() {
  let [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedNames, setClickedNames] = useState([]);
  const [message, setMessage] = useState('');
  function onCardClick(e) {
    const temp = e.target.dataset.name;
    if (!!clickedNames.find((name) => name === temp)) {
      if (score > bestScore) setBestScore(score);
      return GameOver('You Lose');
    }
    else if (score >= 10) {
      return GameOver('You Win');
    }
    setClickedNames([...clickedNames, temp]);
    setScore(score + 1);
  }
  function GameOver(_message) {
    setClickedNames([]);
    setScore(0);
    setMessage(_message);
  }
  function onPlayAgainClick() {
    setMessage('');
  }
  return (
    <div className="App">
      <h1 className="heading"> 🤖  MEMORY GAME 🤖 </h1>
      <Score score={score} bestScore={bestScore} />
      <Cards cardsList={createCharList(6)} onClick={onCardClick} endMessage={message} onPlayAgain={onPlayAgainClick} />
    </div>
  );
}

export default App;
