import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import LogoA from '../../assets/images/logo.png';
import { Routes, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './layout.css';

const Layout = () => {
    return (
        <div className="App">
            <div className="page-container">
                <header className="header">
                    <img className="img" src={LogoA} alt="Audrey Corbridge Logo">
                    </img>

                    <NavLink to="/about" className='navbtn'>About Me</NavLink>
                    <NavLink to="/portfolio" className='navbtn'>Portfolio</NavLink>
                    <NavLink to="/contact" className='navbtn'>Contact</NavLink>
                    <NavLink to="/resume" className='navbtn'>Resume</NavLink>
                </header>
                <div className='content-wrap'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <footer className='footer'>
                        <a className="socialnetwork" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/audrey-corbridge-66059a112/'>
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                        <a className="socialnetwork" target="_blank" rel='noreferrer' href='https://github.com/acorbridg'>
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                        <a className="socialnetwork" target="_blank" rel='noreferrer' href='https://twitter.com/AudreyCorbridge'>
                            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                        </a>

                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Layout;