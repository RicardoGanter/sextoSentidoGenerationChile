import Login from './login/login';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './user/home/home.jsx';
import LayoutHeader from './user/layout';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>  
        <Routes>
          <Route path='/login' element={<User/> }/>
          
          <Route element={<LayoutHeader/> }>
            <Route path='/user/home' element={<User/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
