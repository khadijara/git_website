import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

  import Login from './components/Register/Login';
 //import Home from './components/pages/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<Navigate to={'/off_World'} />} />
    <Route path={'/off_World'} element={<Login />} />

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
