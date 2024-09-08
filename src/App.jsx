
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Test from './Test'
import UseState from './UseState'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}> </Route>
      <Route path='/contact' element={ <Contact/>}></Route>
      <Route path='/test' element={ <Test />}></Route>
      <Route path='/useState' element={<UseState />}></Route>
      </Routes>    
    </BrowserRouter>
  )
}


export default App
