
import './App.css';
import Home from './WebPages/Features/Home-Section/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './WebPages/Features/Home-Section/Footer/Footer';
import AddClasses from './WebPages/Admin/AddClasses/AddClasses';
import Dashboard from './WebPages/Admin/Dashboard/Dashboard';
import Login from './WebPages/Features/Login/Login';
import Registration from './WebPages/Features/Registration/Registration';
import MyNavbar from './WebPages/Features/Navbar/MyNavbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <MyNavbar></MyNavbar>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/add" element={<AddClasses />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Registration />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
