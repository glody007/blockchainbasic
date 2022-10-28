import './DistributedBlockchain.scss'
import Blockchain from './Blockchain';
import { v4 as uuidv4 } from 'uuid';
import {
    useState,
    useEffect,
    useCallback,
    useMemo
} from 'react'

function DistributedBlockchain({ numberOfPeer }) {

    const alphabet = useMemo(() => {
        return [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
        'L','M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ]
    }, []) 

    const [peers, setPeers] = useState([])

    // Helpers
    const genatePeerName = useCallback((peerNumber) => {
        const number = parseInt(peerNumber / alphabet.length)
        const alphabetIndex = peerNumber % alphabet.length
        return `${alphabet[alphabetIndex]}${number > 0 ? number : ''}`
    }, [alphabet])

    // Callbacks 
    const createPeers = useCallback(() => {
        const newPeerList = []
        for(let i=0; i < numberOfPeer; i++) {
            newPeerList.push({id: uuidv4(), name: genatePeerName(i)})
        }
        setPeers(newPeerList)
    }, [numberOfPeer, genatePeerName])

    useEffect(() => {
        createPeers()
    }, [createPeers])

    return (
        <div className='dist-blockchain'>
            {peers.map((item) => (
                <div className='peer' key={item.id}>
                    <h3 className='peer__title'>{item.name}</h3>
                    <Blockchain />
                </div>
            ))}
        </div>
    )
}

DistributedBlockchain.defaultProps = {
    numberOfPeer: 3
}

export default DistributedBlockchain;