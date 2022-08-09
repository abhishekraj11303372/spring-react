import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path="/">
              <Route index element={<ListEmployeeComponent/>}/>
              <Route path='employees' element={<ListEmployeeComponent/>}/>
            </Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
