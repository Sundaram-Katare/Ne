import React from "react";

const NavBar = () => {
  return (
    <>
     <nav className="flex flex-row-reverse justify-center p-4 mt-2 bg-red-500 sm:justify-start">
        <a href="contacts" className="m-2 font-semibold text-lg text-white"><h1>Contacts</h1></a>
        <a href="/projects" className="m-2 font-semibold text-lg text-white"><h1>Projects</h1></a>
        <a href="/skills" className="m-2 font-semibold text-lg text-white"><h1>Skills</h1></a>
        <a href="/home" className="m-2 font-semibold text-lg text-white"><h1>Home</h1></a>
     </nav>
    </>
  )
}

export default NavBar;