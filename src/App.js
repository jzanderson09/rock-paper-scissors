import './styling/App.scss';

import Rock from './components/Rock';
import Paper from './components/Paper';
import Scissors from './components/Scissors';
import User from './components/User';
import Computer from './components/Computer';

function App() {
  return (
    <div className="App">
      <h1>Rock ∞ Paper ∞ Scissors</h1>
      <Computer />
      <User />
      {/* <Rock value='rock' />
      <Paper value='paper' />
      <Scissors value='scissors' /> */}
    </div>
  );
}

export default App;
