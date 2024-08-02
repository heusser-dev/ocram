import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../Navbar/navbar';
import SunOutlined from '@ant-design/icons/lib/icons/SunOutlined';
import Reloj from '../../Content/Clock/Clock';

interface CustomHeaderProps {
  onChangeTheme: () => void;
}

function CustomHeader({ onChangeTheme }: CustomHeaderProps) {
  useEffect(() => {
    // Aquí puedes colocar cualquier efecto necesario para CustomHeader
  }, []);
  return (
    <div className="fixed top-0 z-50 min-w-full ">
      <div className="container justify-between min-w-full px-2 mx-auto ">
        <SunOutlined className=' md:fixed fixed  top-0 px-2 py-2 mt-1 rounded-full bg-white dark:bg-custom-blue dark:text-white  hover:scale-125 transform transition-transform duration-300' onClick={onChangeTheme} style={{ fontSize: '26px' }}/>        {/* Contenido del encabezado */}
        <Navbar /> {/* Asegúrate de importar Navbar si es necesario */}
        <Reloj  />
      </div>
    </div>
  );
}
export default CustomHeader;
