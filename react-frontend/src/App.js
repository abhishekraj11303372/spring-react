import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router forceRefresh={true}>
        <HeaderComponent />
           <div className='container'>
           <Switch>
                <Route exact path="/" component={ListEmployeeComponent}></Route>
                <Route path='/employees' component={ListEmployeeComponent}></Route>
                <Route path='/add-employee' component={CreateEmployeeComponent}></Route>
                <Route path='/update-employee' component={UpdateEmployeeComponent}></Route>
            </Switch>
           </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
