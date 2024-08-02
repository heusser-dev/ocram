import React from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (

    <nav className="md:w-4/12 w-7/12  mx-auto  border-8 md:py-1 py-2  border-cyan-600 md:mx-auto z-50 rounded-r-3xl rounded-l-3xl dark:border-white dark:bg-sky-950 bg-opacity-100 bg-white dark:text-white text-sky-950 justify-around items-center rounded-b-lg border-x border-y animate-pulse-fade-in">
      {/* Contenido del Navbar */}
      <div className="container ">
        <div className="flex justify-around items-center">
          <ul className="flex sm:space-x-4 space-x-1">

            <div className='hover:animate-heartbeat'>

            <li><Link to="/" className="hover:text-yellow-300 text-base md:text-xl lg:text-2xl ">Inicio</Link></li>
            </div>
            <div className='hover:animate-heartbeat'>

            <li><Link to="/blog" className="hover:text-yellow-300 text-base md:text-xl lg:text-2xl ">Blog</Link></li>
            </div>

            <div className='hover:animate-heartbeat'>

            
            <li><Link to="/demos" className="hover:text-yellow-300 text-base md:text-xl lg:text-2xl">Demos</Link></li>
            </div>

            <div className='hover:animate-heartbeat'>
            <li><Link to="/about" className="hover:text-yellow-300 text-base md:text-xl lg:text-2xl">Contacto</Link></li>
            </div>
          
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
