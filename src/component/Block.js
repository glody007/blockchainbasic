import './Block.scss'
import { SHA256 } from 'crypto-js';
import { useState, useEffect, useCallback } from 'react';

function Block({prev, showNumber, showNonce, showPrev, showMine}) {
  // States
  const [number, setNumber] = useState('')
  const [nonce, setNonce] = useState('')
  const [data, setData] = useState('')
  const [hash, setHash] = useState('')

  // Helpers
  const computeHash = (number, nonce, data, prev) => {
    const fullString = `${number}${nonce}${data}${prev}`
    return String(SHA256(fullString))
  }

  // Callbacks 
  const generateHash = useCallback(() => {
    setHash(computeHash(number, nonce, data, prev))
  }, [number, nonce, data, prev])

  /** 
   * Find the nonce that will solve de puzzle.
   * The puzzle here is to find the nonce that will generate a hash 
   * starting with 0000
  */
  const mine = () => {
    const limit = 1000000
    for(let nonce = 0, finded = false; finded === false && nonce < limit; nonce++) {
        const computedHash = computeHash(number, nonce, data, prev)
        if(computedHash.startsWith('0000')) {    
            finded = true
            setNonce(nonce)
        }
    }
  }

  useEffect(() => {
    generateHash()
  }, [generateHash])

  return (
    <form className="block">
        {showNumber && 
            <div className="block__row">
                <label for="number" className="block__label">Block:</label>
                <input id="number" type="number" name="number" className="block__control" 
                    value={number} onChange={(event) => setNumber(event.target.value)} />
            </div>
        }
        {showNonce &&
            <div className="block__row">
                <label for="nonce" className="block__label">Nonce:</label>
                <input id="nonce" type="text" name="nonce" className="block__control" 
                    value={nonce} onChange={(event) => setNonce(event.target.value)} />
            </div>
        }
        <div className="block__row">
            <label for="data" className="block__label">Data:</label>
            <textarea id="data" name="data" rows="10" className="block__control" 
                value={data} onChange={(event) => setData(event.target.value)} />
        </div>
        {showPrev &&
            <div className="block__row">
                <label for="prev" className="block__label">Prev:</label>
                <input id="prev" type="text" name="prev" className="block__control" 
                    disabled value={prev} />
            </div>
        }
        <div className="block__row">
            <label for="hash" className="block__label">Hash:</label>
            <input id="hash" type="text" name="hash" className="block__control" 
                disabled value={hash} />
        </div>
        {showMine &&
            <div className="block__action">
                <button className="btn" 
                    onClick={(event) => { 
                        event.preventDefault()
                        mine()
                    }} 
                >
                    Mine
                </button>
            </div>
        }
    </form>
  );
}

Block.defaultProps = {
    prev: '0000000000000000000000000000000000000000000000000000000000000000',
    showNumber: true,
    showNonce: true,
    showPrev: true,
    showMine: true
}

export default Block;