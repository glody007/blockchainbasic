import './Footer.scss'

function Footer() {
  return (
    <footer className="App-footer">
       <div className='App-footer__main'>
            <h2>Blockchainbasic.com</h2>
            <div className='App-footer__items'>
                <div className='App-footer__item'>
                    <h3>Support Us:</h3>
                    <button className='button button--cta'>
                        Donate
                    </button>
                    <p className='address-label'>Bitcoin address:</p>
                    <p className='address'>bc1qtwlga9xpksqlryyr00xxwfwmmges0wryptc9dk</p>
                </div>
                <div className='App-footer__item'>
                    <h3>Contact:</h3>
                    <ul>
                        <li>
                            Github: <a href='https://github.com/glody007'>glody007</a>
                        </li>
                        <li>
                            Linkdin: <a href='https://www.linkedin.com/in/glody-mbutwile'>glody-mbutwile</a>
                        </li>
                        <li>
                            Email: <a href='mailto: glodymbutwile@gmail.com'>glodymbutwile@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
       <div className='App-footer__extension'>
            <div className='App-footer__content'>
                <p>© BlockchainBasic Project 2021 Publié sous la licence MIT</p>
                <p>English</p>
            </div>
       </div>
    </footer>
  );
}

export default Footer;