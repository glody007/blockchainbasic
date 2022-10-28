import './Blockchain.scss'
import Block from './Block'
import { v4 as uuidv4 } from 'uuid';
import { 
    useState, 
    useEffect, 
    useCallback 
} from 'react'


function Blockchain({ blockQte }) {

    const [blocks, setBlocks] = useState([])

    // Callbacks 
    const createBlocks = useCallback(() => {
        const newBlockList = []
        for(let i=0; i < blockQte; i++) {
            newBlockList.push({id: uuidv4()})
        }
        setBlocks(newBlockList)
    }, [blockQte])

    const onGenerateHash = (newHash, index) => {
        if(index + 1 < blocks.length) {
            const newBlockList = [...blocks]
            newBlockList[index + 1]['prev'] = newHash
            setBlocks(newBlockList)
        }
    }

    useEffect(() => {
        createBlocks()
    }, [createBlocks])

    return (
      <div className='blockchain'>
        {blocks.map((item, index)=> (
            <div className='blockchain__block' key={item.id} >
                <Block numberInitialValue={index+1}
                    onGenerateHash={(newHash) => onGenerateHash(newHash, index)} 
                    prev={item.prev}
                />
            </div>
        ))}
      </div>  
    )
}

Blockchain.defaultProps = {
    blockQte: 4
}

export default Blockchain