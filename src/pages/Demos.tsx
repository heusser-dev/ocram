import React from 'react';
import { Link } from 'react-router-dom';

const Demos = () => (
    <div className="container z-40 w-11/12 h-auto  ml-auto mr-auto mt-8 mb-4 bg-white bg-opacity-0 rounded-lg">
         <ul className="flex sm:space-x-6 space-x-1">
            <li><Link to="qrscanner" className="hover:text-yellow-300 text-lg sm:text-lg md:text-xl lg:text-2xl">Demos</Link></li>
          </ul>
      <h2>Demos</h2>
      {/* Contenido de la página Acerca de */}
    </div>
  );

export default Demos;