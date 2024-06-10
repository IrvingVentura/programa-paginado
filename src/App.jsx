import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Index from "./routes/Index"
import Contactos from './routes/Contactos'
import About from './routes/About'
import ContactoDinamico from './routes/ContactoDinamico'

const App = () => {
  return (
    <div className='mx-auto '>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/contactos">Contactos</NavLink>
        <NavLink to="/about">Acerca de nosotros</NavLink>
      </nav>
      <Routes>
        <Route path='/' index element= {<Index />} />
        <Route path='/contactos' element= {<Contactos />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contacto/:nombre' element= {<ContactoDinamico />} />
        <Route path='/contacto/:nombre/:apellido' element= {<ContactoDinamico />} />
      </Routes>
    </div>
  )
}

export default App