import logo from './logo.svg';
import './App.css';
import './header.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Header-nav">
          <img src={logo} className="Header-logo" alt="logo" />
          <ul className="Header-links">
            <li className="Header-link">Hash</li>
            <li className="Header-link">Block</li>
            <li className="Header-link">Blockchain</li>
            <li className="Header-link">Distributed</li>
            <li className="Header-link">Tokens</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
