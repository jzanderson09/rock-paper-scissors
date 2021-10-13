import './styling/App.scss';

import Rock from './components/Rock';
import Paper from './components/Paper';
import Scissors from './components/Scissors';

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <Rock value='rock' />
      <Paper value='paper' />
      <Scissors value='scissors' />
    </div>
  );
}

export default App;
