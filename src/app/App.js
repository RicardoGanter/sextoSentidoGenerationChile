import Login from './login/login';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './user/home/home';
import LayoutHeader from './user/layout';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>  
        <Routes>
          <Route path='/' element={<Login/> }/>
          <Route path='/user/' element={<LayoutHeader/> }>
            <Route path='/user/home' element={<User/> }/>
          </Route>
          
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
