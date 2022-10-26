import logo from '../assets/logo.svg';
import './Header.scss'

function Header() {
  return (
    <header className="App-header">
        <nav className="Header-nav">
            <img src={logo} className="Header-logo" alt="logo" />
            <ul className="Header-links">
                <li className="Header-link">Hash</li>
                <li className="Header-link">Block</li>
                <li className="Header-link">Blockchain</li>
                <li className="Header-link">Distributed</li>
                <li className="Header-link">Tokens</li>
                <li className="Header-link">Coinbase</li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;