import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <Link to='/students'>View Students </Link> | <Link to='/about'>About</Link> | <Link to = '/'>&#127968; Home</Link>

            <p>Made with &#10084; in Patna </p>            
        </footer>
    )
}

export default Footer;