import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Conteiner from '../Components/layout/Conteiner.js';
import Menu from '../Components/layout/Menu.js';
import Rodape from '../Components/layout/Rodape.js';
import Company from '../Components/Pages/Company.js';
import Contact from '../Components/Pages/Contact.js';
import Home from '../Components/Pages/Home.js';
import NewProject from '../Components/Pages/NewProject.js';
import Projects from '../Components/Pages/Projects.js';


export default function Rotas() {
  return (
    <BrowserRouter>
      <Menu/>
      <Conteiner customClass="min-height">
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/projects' element={<Projects/>} />
            <Route exact path='/company' element={<Company/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/newproject' element={<NewProject/>} />
        </Routes>
      </Conteiner>
      <Rodape/>
    </BrowserRouter>
  );
}