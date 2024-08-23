import './styles/App.css';
import FullSection from './components/FullSection';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import Experience from './components/Experience';
import umichLogo from './images/umich-logo.png';

function App() {
  const bottomText1 = "College Student\nEntrepreneur\nAspiring Software Engineer";
  const bottomText2 = "Pursuing a dual degree in Business and Computer Science. On campus, you can find me working at CLAWS or at a Sigma Eta Pi event!";
  const bottomText3 = "Through my professional experiences, I’ve strived to use technology as best as possible to solve real problems and enhance user experience";
  const bottomText4 = "With each project, I’ve worked to not only learn but also create an innovative and user friendly solution for problems that I’ve noticed in my everyday life";
  const bottomText5 = "I’m always open to a coffee chat to\ndiscuss my work. Follow me at the\nlinks to the right!";

  const workDesc1 = "Spearheaded the development of an AI-driven platform, ”Collage,” managing four developers in an Agile environment with two week sprints to transform how students interact with their academic environments.";
  const workDesc2 = "Led a group of 3 students as product manager to build a watsonx assistant instance, enhancing the assistant’s capabilities to address 9 insurance-related inquiries and improving user experience through 50+ customized responses.";
  const workDesc3 = "Conducted market research and competitive analysis on 7 commercial payment platforms in Fintech space. Worked with the platform team for 3 sprints and wrote 20+ user stories for new Shared Budgets platform feature.";
  return (
    <div className="App"> 
      <Navbar/>
      <div className="snap-container">
        <FullSection id="section-1" backgroundColor="#014421">
          <Main topText="Hi, my name is" middleText="Alex Wang" bottomText={bottomText1} topTextColor="#B2AC88" middleTextColor="#FFFFFF" bottomTextColor="#8A9A5B" className="left-object"/>
          <Contact/>
        </FullSection>

        <FullSection id="section-2" backgroundColor="#370058">
          <Main topText="I go to the" middleText="University of Michigan" bottomText={bottomText2} topTextColor="#B2AC88" middleTextColor="#FFFFFF" bottomTextColor="#8A9A5B" className="left-object"/>
          <img src={umichLogo} alt="logo"/>
        </FullSection>

        <FullSection id="section-3" backgroundColor="#00274C">
          <Main topText="Here's my" middleText="Work Experience" bottomText={bottomText3} topTextColor="#B2AC88" middleTextColor="#FFFFFF" bottomTextColor="#8A9A5B" className="left-object"/>
          <div className="experiences">
            <Experience date1="April 2024" date2="Present" title="Co-Founder & COO • Collage" description={workDesc1}/>
            <Experience date1="May 2024" date2="July 2024" title="Accelerate Summer Program • IBM" description={workDesc2}/>
            <Experience date1="May 2023" date2="June 2023" title="Product Management Intern • Extend Enterprises" description={workDesc3}/>
            <p className="link-text">View Full Resume</p>
          </div>
        </FullSection>

        <FullSection id="section-4" backgroundColor="#F5F5DC">
          <Main topText="Here are my" middleText="Personal Projects" bottomText={bottomText4} topTextColor="#6B8E23" middleTextColor="#014421" bottomTextColor="#6B8E23" className="left-object"/>
          <div className="experiences">
            <Experience date1="April 2024" date2="Present" title="Briefly News • ReactJS, NodeJS, ExpressJS, MongoDB" description={workDesc1} datesColor="#000000" titleColor="#014421" descColor="#000000"/>
            <Experience date1="May 2024" date2="July 2024" title="Pomodoro Timer Chrome Extension • HTML, CSS, JS" description={workDesc2} datesColor="#000000" titleColor="#014421" descColor="#000000"/>
            <Experience date1="May 2023" date2="June 2023" title="Movie Reviews Classification Algorithm • TensorFlow" description={workDesc3} datesColor="#000000" titleColor="#014421" descColor="#000000"/>
            <p className="link-text">View Full Resume</p>
          </div>
        </FullSection>

        <FullSection id="section-5" isLast backgroundColor="#014421">
          <Main topText="Please feel free to" middleText="Reach Out" bottomText={bottomText5} topTextColor="#B2AC88" middleTextColor="#FFFFFF" bottomTextColor="#8A9A5B" className="left-object"/>
          <Contact/>
        </FullSection>
      </div>
    </div>
  );
}

export default App;
