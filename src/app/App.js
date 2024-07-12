import Login from './login/login';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './user/home/home.jsx';
import LayoutHeader from './user/layout';
import History from './user/history/history.jsx';

import Register from './register/register.jsx';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>  
        <Routes>
          <Route path='/login' element={<Login/> }/>
          <Route path='/register' element={<Register/>}/>
          <Route element={<LayoutHeader/> }>
            <Route path='/user/home' element={<Home/>}/>
            <Route path='/user/history' element={<History/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
