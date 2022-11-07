import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/logo.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons' 
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons' 
import './Sidebar.css';


const Sidebar = () =>  (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className="img" src= {LogoA} alt="Audrey Corbridge Logo">
            </img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a className="socialnetwork" target= "_blank"rel = 'noreferrer' href='https://www.linkedin.com/in/audrey-corbridge-66059a112/'>
                    <FontAwesomeIcon icon= {faLinkedin} color="#4d4d4e" />                
                </a>
            </li>
            <li>
                <a className="socialnetwork" target= "_blank"rel = 'noreferrer' href='https://github.com/acorbridg'>
                    <FontAwesomeIcon icon= {faGithub} color="#4d4d4e" />                
                </a>
            </li>
            <li>
                <a className="socialnetwork" target= "_blank"rel = 'noreferrer' href='https://twitter.com/AudreyCorbridge'>
                    <FontAwesomeIcon icon= {faTwitter} color="#4d4d4e" />                
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar;