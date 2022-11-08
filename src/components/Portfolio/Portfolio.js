import Project1 from '../../assets/images/UtahLake.jpeg';
import Project2 from '../../assets/images/PasswordGenerator.png';
import Project3 from '../../assets/images/WorkDayScheduler.jpeg';
import Project4 from '../../assets/images/Coyote.jpg';
import Project5 from '../../assets/images/QuickByte.png';
import Project6 from '../../assets/images/RockPaperScissor.png';
import './portfolio.css'

const PortfolioRow = (props) => {
    return (
        <a href={props.href}>
            <div className='portfolio'>{props.children}</div></a>
    )
}

const Portfolio = () => {
    return (
        <div className="container grid">
            <PortfolioRow href="https://www.uvu.edu/socialimpact/nsf/utah_lake_nsf_research.html">
                <img src={Project1} alt="profile-picture" />
                <h2> Project 1: Utah Lake Research with UVU</h2>
                <h3>Helped with research of the harmful algeal blooms that plague Utah Lake. We were hoping to answer the questions of what was causing the deterioration of the lakes as a natural source for Utah County. </h3>
            </PortfolioRow>
            <PortfolioRow href='https://github.com/acorbridg/PasswordGeneratorAC'>
                <img src={Project2} alt="profile-picture" />
                <h2> Project 2: Password Generator</h2>
                <h3>This project is a password generator that can generate a password between 8-123 characters following user selected criteria. Users are presented with prompts asking if they want numbers, uppercase, lowercase or special character included.</h3>
            </PortfolioRow>
            <PortfolioRow href='https://github.com/acorbridg/WorkDayScheduler_AC'>
                <img src={Project3} alt="profile-picture" />
                <h2> Project 3: WorkDay Scheduler</h2>
                <h3>This project is a daily planner that dynamically changed according to the time of day. Users are presented with a table which includes a save button that will store event details to local storage.</h3>
            </PortfolioRow>
            <PortfolioRow href='https://drive.google.com/drive/folders/1dIx84z0-JJyLcWLwNJ4wjzIdUUDVwdTs?usp=share_link'>
                <img src={Project4} alt="profile-picture" />
                <h2> Project 4: Illustration Portfolio</h2>
                <h3>Illustrative works published and printed. </h3>
            </PortfolioRow>
            <PortfolioRow href='https://github.com/acorbridg/Project1'>
                <img src={Project5} alt="profile-picture" />
                <h2>Project 5: QuickByte</h2>
                <h3>Quickbyte is a simple way to reduce the amount of time you spend picking a restaurant by narrowing your options down to a few restaurants that are in your area.</h3>
            </PortfolioRow>
            <PortfolioRow href='https://github.com/RP-LITE/rp-lite'>
                <img src={Project6} alt="profile-picture" />
                <h2> Project 6: RockDog, PaperSquirrel, ScissorCat</h2>
                <h3>Send your RockDogs, PaperSquirrels, and ScissorCats to compete for most charming animal against other wacky object/animal combinations.</h3>
            </PortfolioRow>
        </div >
    )
}
export default Portfolio