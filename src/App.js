
import './App.css';
import CustomNavbar from './component/NavigationBar/Index';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage'; 
import Portfolio from './pages/Portfolio';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import AllProjects from './pages/AllProjects';

function App() {
  return (
    <div>
  
    <BrowserRouter>
    <CustomNavbar/>
      <Switch>
       <Route exact path="/" component = {HomePage}/>
      <Route exact path="/about" component = {About}/>
      <Route exact path="/portfolio" component = {Portfolio}/>
      <Route exact path="/contactus" component = {ContactPage}/> 
      <Route exact path="/allProjects" component={AllProjects} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
