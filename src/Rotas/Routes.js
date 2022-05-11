import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Conteiner from '../Components/layout/Conteiner.js';
import Menu from '../Components/layout/Menu.js';
import Rodape from '../Components/layout/Rodape.js';
import Company from '../Components/Pages/Company.js';
import Contact from '../Components/Pages/Contact.js';
import Home from '../Components/Pages/Home.js';
import NewProject from '../Components/Pages/NewProject.js';
import Project from '../Components/Pages/Project.js';
import Projects from '../Components/Pages/Projects.js';


export default function Rotas() {
  return (
    <BrowserRouter>
      <Menu/>
      <Conteiner customClass="min-height">
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route  path='/projects' element={<Projects/>} />
            <Route  path='/company' element={<Company/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route  path='/newproject' element={<NewProject/>} />
            <Route  path='/project/:id' element={<Project/>} />
        </Routes>
      </Conteiner>
      <Rodape/>
    </BrowserRouter>
  );
}