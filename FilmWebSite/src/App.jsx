import './App.css'
import Home from './assets/page/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InterestelarPage from './assets/page/interestelar-page/Interestelar-page'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/InterestelarPage' element={<InterestelarPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
