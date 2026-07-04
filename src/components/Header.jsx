import reactImg from '../assets/react-core-concepts.png';
import './Header.css';


const reactDescriptions = ['Fundamental', 'Core', 'Crucial'];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export function Header() {
  const randomDescription = reactDescriptions[getRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
