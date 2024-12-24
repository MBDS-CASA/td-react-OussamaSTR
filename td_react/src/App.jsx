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
function Footer({annee, nom, prenom}) {
  return (
    <footer>
      
      © {annee} - {prenom}.{nom}, Tous droits réservés.
    
    </footer>
  )
}
function MainContent({jour, mois, annee, heure, minute, seconde}) {
  return (
    <main>
      <p>
      Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{seconde}
      </p>
    </main>
  )
}
function DataExtract({ data }) {
  const [note, setNote] = useState(null);

  const handleRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setNote(data[randomIndex]);
  };

  return (
    <div className="item-display"  >
      <button onClick={handleRandomNote}>Tirer une note aléatoire</button>
      {note ? (
        <div>
          <h2>Course: {note.course}</h2>
          <p>Student: {note.student.firstname} {note.student.lastname}</p>
          <p>Grade: {note.grade}</p>
          <p>Date: {note.date}</p>
        </div>
      ) : (
        <p>Aucune note sélectionnée</p>
      )}
    </div>
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
        <MainContent jour='Lundi' mois='Decembre' annee='2024' heure='16' minute='30' seconde='00' />
        <DataExtract data={data} />
      </div>
      <div className="card">
      <button onClick={() => setCount((count) => (count > 0 ? count - 1 : count))}>
          -
        </button>
        <button>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Footer annee='2024' nom='EL RHRIB' prenom='Oussama'/>
      </div>
    </>
  );
}

export default App;
