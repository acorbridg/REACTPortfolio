import './about.css'
import Profile from '../../assets/images/Profile.jpeg';
const About = () => {
    return (
        <div className="container">
            <div className="profile">
                <img src={Profile} alt="profile-picture" className='profile-img' />
                <div className='extrawrapping'><h1>Audrey Corbridge </h1>
                    <div><h2> Full Stack Developer, Illustration and Science</h2>
                        <p>Audrey Corbridge was born in the fall of 1990, raised by a single mother and three substantially older siblings. She was raised on a steady diet of 80’s hand-me downs, bootleg VHS taps of My Little Pony and Gummi Bears, and the Sunday Comics.  As Audrey grew, her older siblings moved out and her youngest sibling showed up. Sandwiched between a 3 year old brother watching Tellitubbies and 28 year old brother having his 3rd child, there was a skewed perception of childish things. This made the teenage-angst-years a difficulty to behold. After being told for multiple years to use her talents for Jesus, she moved out and began working on an Art Education degree at Southern Utah University.  She began working in various mediums and built her skills in illustration. She received the opportunity to move to a civilized society and transfer to Utah Valley University. When she arrived, she was startled to find that she was set back academically. This was a problem. The solution? Get another degree! She chose the highest contrasting degree to an art program, Biotechnology. This fulfilled her career goals that were set at the ripe old age of four of becoming a Comic Artist/Zoo Scientist/Princess. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About