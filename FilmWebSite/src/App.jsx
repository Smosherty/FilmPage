import './App.css'
import Home from './assets/page/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InterestelarPage from './assets/page/interestelar-page/Interestelar-page'
import Account from './assets/page/Acounts/Account'
import PlansPage from './assets/page/plans/PlansPage'


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/InterestelarPage' element={<InterestelarPage/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/PlansPage' element={<PlansPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
