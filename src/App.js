
import './App.css';
import './index.css'
import{BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Login from "./pages/Login" 
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
<Router>
  <Navbar/>

    <Route exact to="/">
      <Home/>
   <Products/>
 <Services/>
 <Footer/>
    <Login/>
    </Route>
  

</Router>
  );
}

export default App;
