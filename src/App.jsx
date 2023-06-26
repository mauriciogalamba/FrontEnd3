import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'


function App() {


  return (
    <>
      <Navbar />
  
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='*' element = {<div>404</div>}/>
        </Routes>
    
      <Footer/>

    </>
  )
}

export default App
