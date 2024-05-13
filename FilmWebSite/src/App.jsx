import './App.css'
import Home from './assets/page/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InterestelarPage from './assets/page/interestelar-page/Interestelar-page'
import Acount from './assets/page/Acounts/Acount'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/InterestelarPage' element={<InterestelarPage/>}/>
        <Route path='/Acount' elment={<Acount/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
