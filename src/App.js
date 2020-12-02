import forkme from './forkme.svg';
import devfinitions from './data/devfinitions.json';
import './App.css';

function App() {
  var current = devfinitions[Math.floor(Math.random()*devfinitions.length)];

  return (
    <div className="App">
      <a href="https://github.com/aviscasillas/devfinition#contributing" target="blank">
        <img src={forkme} className="App-forkme" alt="Fork me on GitHub" />
      </a>
      <header className="App-header">
        <h2>
          {current["name"]}
        </h2>
        <h1>¯\_(ツ)_/¯</h1>
        <a className="App-link" href="{current['link']}" target="_blank" rel="noopener noreferrer">
          {current["definition"]}
        </a>
      </header>
    </div>
  );
}

export default App;
