import forkme from './forkme.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="https://github.com/aviscasillas/devfinition" target="blank">
        <img src={forkme} className="App-forkme" alt="Fork me on GitHub" />
      </a>
      <header className="App-header">
        <h2>
          Domain-Driven Design (DDD)
        </h2>
        <h1>¯\_(ツ)_/¯</h1>
        <a
          className="App-link"
          href="https://circleci.com/blog/exploring-domain-driven-design-at-circleci/?utm_medium=SEM&utm_source=gnb&utm_campaign=SEM-gnb-DSA-Eng-ni&utm_content=&utm_term=dynamicSearch-&gclid=CjwKCAiAzNj9BRBDEiwAPsL0d2eKoKA1AlVYlyvMu-k-EdVPApm9q2g5EU8STZxXrp3a11txB50unxoCZMwQAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
        A method of connecting software architecture and relevant domains by using a universally accepted model. In other words, the software matches the domain.
        </a>
      </header>
    </div>
  );
}

export default App;
