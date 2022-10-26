import './App.scss';
import logo from './assets/logo.svg'
import { Header } from './component';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Hero section */}
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

      {/* Hash section */}
      <div className='App-section'>
        <h2 className='App-section__title'>Hash</h2>
        <p className='App-section__summary'>
          Hashing is the process of transforming any given key or a string of characters into another value. 
          This is usually represented by a shorter, fixed-length value or key that represents and makes 
          it easier to find or employ the original string.
        </p>
      </div>

      {/* Block section */}
      <div className='App-section'>
        <h2 className='App-section__title'>Block</h2>
        <p className='App-section__summary'>
          Formed from the six elements The version number of the block,
          The hash of the previous block in the chain,
          A code generated from transaction data,
          A timestamp of when the block was created,
          The difficulty target that adjusts the difficulty of mining,
          And a random string of characters called the nonce.
        </p>
      </div>

      {/* Blockchain section */}
      <div className='App-section'>
        <h2 className='App-section__title'>Blockchain</h2>
        <p className='App-section__summary'>
          A blockchain is exactly what it sounds like it is: 
          a chain consisting of blocks of information.
        </p>
      </div>

      {/* Distributed section */}
      <div className='App-section'>
        <h2 className='App-section__title'>Distributed</h2>
        <p className='App-section__summary'>
          Distributed ledgers use independent computers (referred to as nodes) to record, 
          share and synchronize transactions in their respective electronic ledgers 
          (instead of keeping data centralized as in a traditional ledger).
        </p>
      </div>

      {/* Tokens section */}
      <div className='App-section'>
        <h2 className='App-section__title'>Tokens</h2>
        <p className='App-section__summary'>
          Put transactions as data in blocks.
        </p>
      </div>

      {/* Coinbase section */}
      <div className='App-section'>
        <h2 className='App-section__title'>Coinbase</h2>
        <p className='App-section__summary'>
          Coinbase transactions are also known as generating transactions. 
          These are a fundamental part of the generation of currencies, 
          since they are not the results of payment between two people, 
          And they are the ones that give rise to this new currency.
        </p>
      </div>
    </div>
  );
}

export default App;
