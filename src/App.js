import forkme from './forkme.svg';
import devfinitions from './devfinitions.json';
import './App.css';

function App() {
  var current = devfinitions[Math.floor(Math.random()*devfinitions.length)];

  var name = current["name"];
  var definition  = current["definition"];
  var link = current["link"];

  return (
    <div className="App">
      <a href="https://github.com/aviscasillas/devfinition" target="blank">
        <img src={forkme} className="App-forkme" alt="Fork me on GitHub" />
      </a>
      <header className="App-header">
        <h2>
          {name}
        </h2>
        <h1>¯\_(ツ)_/¯</h1>
        <a className="App-link" href="{link}" target="_blank" rel="noopener noreferrer">
          {definition}
        </a>
      </header>
    </div>
  );
}

export default App;
