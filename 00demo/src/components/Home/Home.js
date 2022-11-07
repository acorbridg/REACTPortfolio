import LogoA from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src = {LogoA} alt = "developer" />
                </h1>
                <h2> Full Stack Developer</h2>    
                <Link to="/contact" className='' > CONTACT ME</Link>        
            </div>
        </div>
    )
}

export default Home
