import LogoA from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h2> Full Stack Developer</h2>    
                <Link to="/contact" className='' > CONTACT ME</Link>        
            </div>
        </div>
    )
}

export default Home
