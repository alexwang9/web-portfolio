import './styles/App.css';
import FullSection from './components/FullSection';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact';
import umichLogo from "./images/umich-logo.png";

function App() {
  const bottomText1 = "College Student\nEntrepreneur\nAspiring Software Engineer";
  const bottomText2 = "Pursuing a dual degree in Business and Computer Science. On campus, you can find me working at CLAWS or at a Sigma Eta Pi event!";
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
          <h1>Section 3</h1>
        </FullSection>
        <FullSection id="section-4" backgroundColor="#F5F5DC">
          <h1>Section 4</h1>
        </FullSection>
        <FullSection id="section-5" isLast backgroundColor="#014421">
          <h1>Section 5</h1>
        </FullSection>
      </div>
    </div>
  );
}

export default App;
