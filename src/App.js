import forkme from './forkme.svg';
import devfinitions from './data/devfinitions.json';
import './App.css';

function App() {
  var more = () => {};
  var current = devfinitions[Math.floor(Math.random()*devfinitions.length)];

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://github.com/aviscasillas/devfinition" target="blank">
          <img src={forkme} className="App-forkme" alt="Fork me on GitHub" />
        </a>
        <h1>
          {current["name"]}
        </h1>
        <a className="App-link" href="{current['link']}" target="_blank" rel="noopener noreferrer">
          {current["definition"]}
        </a>
        <div className="App-button" onClick={more}><h1>+</h1></div>
      </header>
    </div>
  );
}

export default App;
