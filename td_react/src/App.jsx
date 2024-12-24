import { useState } from 'react';
import university from './assets/azurelogo.png';
import './App.css';
import data from './../../data.json';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function ShowData({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell>Student</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((note, index) => (
            <TableRow key={index}>
              <TableCell>{note.course}</TableCell>
              <TableCell>
                {note.student && `${note.student.firstname} ${note.student.lastname}`}
              </TableCell>
              <TableCell>{note.grade}</TableCell>
              <TableCell>{note.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
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

function HamburgerMenu({ menuItems, onSelect, ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0]);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  const handleItemClick = (item) => {
    setActiveItem(item);
    onSelect(item);
    setMenuOpen(false); // Fermer le menu après un clic
  };

  return (
    <div className="hamburger-menu" {...props}>
      {/* Icône Hamburger */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      
      {menuOpen && (
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`menu-item ${item === activeItem ? "active" : ""}`} // Ajout de la classe active
            >
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
  const [currentPage, setCurrentPage] = useState("Notes");

  const handleMenuSelect = (item) => {
    setCurrentPage(item);
  };
  return (
    <>
      <HamburgerMenu
        menuItems={["Notes", "Etudiants", "Matières", "A propos"] }
        onSelect={handleMenuSelect}
      />
      <main>
        <p>Vous êtes dans la page : {currentPage}</p>
      </main>

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
        <ShowData data = {data} />
        <Footer annee='2024' nom='EL RHRIB' prenom='Oussama'/>
      </div>
    </>
  );
}

export default App;
