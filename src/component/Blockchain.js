import './Blockchain.scss'
import Block from './Block'
import { useState } from 'react'


function Blockchain({ blockQte }) {

    const [blocks, setBlocks] = useState([{id:1}, {id:2}, {id:3}])

    // Callbacks 
    const onGenerateHash = (newHash, index) => {
        if(index + 1 < blocks.length) {
            const newBlockList = [...blocks]
            newBlockList[index + 1]['prev'] = newHash
            setBlocks(newBlockList)
        }
    }

    return (
      <div>
        {blocks.map((item, index)=> (
            <Block numberInitialValue={index+1} key={item.id} 
                onGenerateHash={(newHash) => onGenerateHash(newHash, index)} 
                prev={item.prev}
            />
        ))}
      </div>  
    )
}

Blockchain.defaultProps = {
    blockQte: 4
}

export default Blockchain