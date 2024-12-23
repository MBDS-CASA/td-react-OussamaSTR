import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import university from './assets/azurelogo.png';
import './App.css';
import data from './../../data.json';

function Header({ title1, title2, logo }) {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>{title1}</h1>
      <h2>{title2}</h2>
    </header>
  );
}

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = ['Notes', 'Etudiants', 'Matières', 'A propos'];

  const handleItemClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
    setMenuOpen(false); // Ferme le menu après un clic
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {menuOpen && (
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HamburgerMenu />
      <div>
        <Header
          title1="Introduction à React"
          title2="A la découverte des premières notions de React"
          logo={university}
        />
        {/* Autres composants ici */}
      </div>
    </>
  );
}

export default App;
