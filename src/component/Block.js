import './Block.scss'
import { useState, useEffect, useCallback } from 'react';

function Block({prev, showNumber, showNonce, showPrev}) {
  // States
  const [number, setNumber] = useState('')
  const [nonce, setNonce] = useState('')
  const [data, setData] = useState('')
  const [hash, setHash] = useState('')

  // Callbacks 
  const computeHash = useCallback(() => {
    const fullString = `${number}${nonce}${data}${prev}`
    setHash(fullString)
  }, [number, nonce, data, prev])

  useEffect(() => {
    computeHash()
  }, [computeHash])

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
    </form>
  );
}

Block.defaultProps = {
    prev: '0000000000000000000000000000000000000000000000000000000000000000',
    showNumber: true,
    showNonce: true,
    showPrev: true
}

export default Block;