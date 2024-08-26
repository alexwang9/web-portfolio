import React, {useState, useEffect} from 'react';
import './styles/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FullSection from './components/FullSection';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import Experience from './components/Experience';
import umichLogo from './images/umich-logo.png';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  const bottomText1 = "College Student\nEntrepreneur\nAspiring Software Engineer";
  const bottomText2 = "Pursuing a dual degree in Business and Computer Science. On campus, you can find me working at CLAWS or at a Sigma Eta Pi event!";
  const bottomText3 = "Through my professional experiences, I’ve strived to use technology as best as possible to solve real problems and enhance user experience";
  const bottomText4 = "With each project, I’ve worked to not only learn but also create an innovative and user friendly solution for problems that I’ve noticed in my everyday life";
  const bottomText5 = "I’m always open to a coffee chat to\ndiscuss my work. Follow me at the\nlinks to the right!";

  const workDesc1 = "Spearheaded the development of an AI-driven platform, ”Collage,” managing four developers in an Agile environment with two week sprints to transform how students interact with their academic environments.";
  const workDesc2 = "Led a group of 3 students as product manager to build a watsonx assistant instance, enhancing the assistant’s capabilities to address 9 insurance-related inquiries and improving user experience through 50+ customized responses.";
  const workDesc3 = "Conducted market research and competitive analysis on 7 commercial payment platforms in Fintech space. Worked with the platform team for 3 sprints and wrote 20+ user stories for new Shared Budgets platform feature.";

  const projDesc1 = "Developed and deployed a full-stack web application using the MERN stack to automate the daily delivery of summarized New York Times main page content to registered users via email.";
  const projDesc2 = "Built a Pomodoro timer Chrome extension to provide users with a customizable work and break interval experience using Google Chrome's storage and runtime APIs to automatically update and retrieve timer data in real time.";
  const projDesc3 = "Wrote a program to classify movie reviews as positive, negative, or neutral in Google Colab. Executed data transformation on CSV file of reviews, then created sequential neural network model using three dense and three dropout layers.";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const firstSectionHeight = document.getElementById('section-1').offsetHeight;

      if(scrollPosition < firstSectionHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="App"> 
      {showNavbar && <Navbar/>}
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
            <Experience date1="April 2024" date2="Present" title="Co-Founder & COO • Collage" description={workDesc1} link={"https://collage-dev-main-qwesafadkupck.herokuapp.com/"}/>
            <Experience date1="May 2024" date2="July 2024" title="Accelerate Summer Program • IBM" description={workDesc2} link={"https://www.ibm.com/blogs/jobs/career-ready-skills-with-ibm-accelerate-summer-program/"}/>
            <Experience date1="May 2023" date2="June 2023" title="Product Management Intern • Extend Enterprises" description={workDesc3} link={"https://www.paywithextend.com/"}/>
            <div className="resume-link">
              <a href="https://drive.google.com/file/d/1LNI5CZ9rIJwjkq43XmJvuMoyhVMYSF7v/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="link-text">View Full Resume
              </a>
              <a href="https://drive.google.com/file/d/1LNI5CZ9rIJwjkq43XmJvuMoyhVMYSF7v/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </FullSection>

        <FullSection id="section-4" backgroundColor="#F5F5DC">
          <Main topText="Here are my" middleText="Personal Projects" bottomText={bottomText4} topTextColor="#6B8E23" middleTextColor="#014421" bottomTextColor="#6B8E23" className="left-object"/>
          <div className="experiences">
            <Experience date1="April 2024" date2="Present" title="Briefly News • ReactJS, NodeJS, ExpressJS, MongoDB" description={projDesc1} datesColor="#000000" titleColor="#014421" descColor="#000000" link="https://github.com/alexwang9/briefly"/>
            <Experience date1="May 2024" date2="July 2024" title="Pomodoro Timer Chrome Extension • HTML, CSS, JS" description={projDesc2} datesColor="#000000" titleColor="#014421" descColor="#000000" link="https://github.com/alexwang9/pomodoro-timer"/>
            <Experience date1="May 2023" date2="June 2023" title="Movie Reviews Classification Algorithm • TensorFlow" description={projDesc3} datesColor="#000000" titleColor="#014421" descColor="#000000" link="https://colab.research.google.com/drive/16hOG7y1243wF5u8MPBr24noaCXRWc9Jh?usp=sharing"/>
            <div className="resume-link">
              <a href="https://drive.google.com/file/d/1LNI5CZ9rIJwjkq43XmJvuMoyhVMYSF7v/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#014421" }} className="link-text">View Full Resume
              </a>
              <a href="https://drive.google.com/file/d/1LNI5CZ9rIJwjkq43XmJvuMoyhVMYSF7v/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#014421" }} className="hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>
            </div>

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
