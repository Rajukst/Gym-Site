
import './App.css';
import Home from './WebPages/Features/Home-Section/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './WebPages/Features/Home-Section/Footer/Footer';
import AddClasses from './WebPages/Admin/AddClasses/AddClasses';
import Dashboard from './WebPages/Admin/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/add" element={<AddClasses />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
