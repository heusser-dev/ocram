import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import Template from './components/Content/modelo3d/modelo3d';
import { Card } from 'antd';
import Modelo3d from './components/Content/modelo3d/modelo3d';
import ComponenteConModelo3D from './components/Content/Card/card';
import Sider from 'antd/es/layout/Sider';
import CustomHeader from './components/Layout/Custom-Header/customHeader';
import './App.css';
import ParticleBackground from './components/Layout/particles/particles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Demos from './pages/Demos';
import About from './pages/Contacto';
import GithubOutlined from '@ant-design/icons/lib/icons/GithubOutlined';
import LinkedinOutlined from '@ant-design/icons/lib/icons/LinkedinOutlined';
import QrScanner from './components/Apps/Qrscanner/Qrscanner';



const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (theme === "dark") {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [theme]);


  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    
    <div className="" style={{}}>

      <div className="background">     </div>



      <Router>

        <div className='bt-0'>
          {/* <CustomHeader onChangeTheme={handleChangeTheme} /> */}
          {/* Otros componentes */}
        </div>
        <ParticleBackground theme={theme} />
        <div className=" bg-cover mb-0 z-20 bg-center w-full flex items-center justify-center">

          <Routes>
            <Route path="/" element={<ComponenteConModelo3D />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="demos" element={<Demos />}/>
              {/* <Route path="qrscanner" element={< QrScanner />} />
            </Route>           */}
            <Route path="demos/qrscanner" element={< QrScanner />} />

            </Routes>   

        </div>
        {/* <div className='mb-32'>

<img className='  bg-transparent dark:bg-blue-950 dark:bg-opacity-60 rounded-3xl h-52 w-auto mr-auto ml-auto m hover:scale-125 transform transition-transform duration-300' src={process.env.PUBLIC_URL + '/img/logoSinfondo.png'} />
</div> */}

        <div className="fixed z-50 text-center py-1 bottom-0 container border min-w-full">
        <div>
            <iframe
                width="100%"
                height="110"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1719395265&color=%23240404&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            <div style={{
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
              fontWeight: 100
            }}>
                {/* <a href="https://soundcloud.com/oliverdmnd" title="Øliver DMND Oficial" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Øliver DMND Oficial</a> · 
                <a href="https://soundcloud.com/oliverdmnd/oliver-dmnd-i-hate-you-free-download" title="Oliver DMND - I HATE YOU ! [FREE DOWNLOAD]" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Oliver DMND - I HATE YOU ! [FREE DOWNLOAD]</a> */}
            </div>
        </div>
{/* 
          <a className='p-2' href='https://github.com/heusser-dev' target="_blank"> 
          
          <GithubOutlined style={{ fontSize: '24px' }} />
          </a>
          
          <a className="p-2" href='https://www.linkedin.com/in/juan-pablo-heusser-escamilla-9a341721a/' target="_blank">
          
          <LinkedinOutlined style={{ fontSize: '24px', }} />
          </a> */}

        </div>
      </Router>
    </div>

  );
};

export default App;
