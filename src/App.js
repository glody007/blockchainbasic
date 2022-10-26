import './App.scss';
import logo from './assets/logo.svg'
import { Header } from './component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-section Hero'>
        <div className='Hero-main'>
          <h1>Understand how <span className='highlited'>Blockchain</span> works on just one page.</h1>
          <h4>Learn how Bitcoin works by understanding the blockchain, which is the technology behind it.</h4>
          <button className='button button--cta'>
            Learn
          </button>
        </div>
        <div className='Hero-image'>
          <img src={logo} alt="Blockchain illustration" />
        </div>
      </div>
    </div>
  );
}

export default App;
