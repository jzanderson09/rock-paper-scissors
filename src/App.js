import Game from './components/Game';
import './styling/App.scss';

function App() {
  return (
    <div className="App">
      <h1 id="app-banner">Rock ∞ Paper ∞ Scissors</h1>
      <Game />
    </div>
  );
}

export default App;
