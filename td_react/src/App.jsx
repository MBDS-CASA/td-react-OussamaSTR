import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import university from './assets/azurelogo.png'
import './App.css'
function Header({ title1, title2, logo }) {
  return (
    <header>
      <img src={logo}  alt="Logo" />
      <h1>{title1}</h1>
      <h2>{title2}</h2>
    </header>
  );
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
function Footer({nom, prenom}) {
  return (
    <footer>
      
        Tous droits réservés - {nom} {prenom}
    
    </footer>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title1='Introduction à React'  title2='A la découverte des premières notions de React' logo={university}/>
        <MainContent jour='Lundi' mois='Decembre' annee='2024' heure='16' minute='30' seconde='00' />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
        <Footer nom='EL RHRIB' prenom='Oussama'/>
      
    </>
  )
}

export default App 
