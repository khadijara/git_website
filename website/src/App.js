import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

  import Login from './components/Register/Login';
  import Signup from './components/Register/Signup';
  import Home from './components/pages/Home';
  import Contact from './components/pages/ContactUs';
  import Team from './components/pages/Team';
  import About from './components/pages/About';
  
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<Navigate to={'/off_World'} />} />
    <Route path={'/off_World'} element={<Home />} />
    <Route path={'/login'} element={<Login />} />
    <Route path={'/Signup'} element={<Signup />} />
    <Route path={'/Contact'} element={<Contact />} />
    <Route path={'/About'} element={<About />} />
    <Route path={'/Team'} element={<Team />} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
