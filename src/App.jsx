import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'
import Footer from './components/Footer/Footer'
function App(){
  return(
    <>
      <Home/>
      <Footer/>
      </>
  )
}
export default App;
