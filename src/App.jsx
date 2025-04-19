import { useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Skill from './components/Skill';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <NavBar />
      <div className={darkMode ? "dark" : ""}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="m-0 p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
        <Hero />
        <About />
        <Skill />
      </div>
    </>
  )
}

export default App
