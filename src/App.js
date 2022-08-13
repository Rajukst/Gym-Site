import "./App.css";
import Home from "./WebPages/Features/Home-Section/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./WebPages/Features/Home-Section/Footer/Footer";
import AddClasses from "./WebPages/Admin/AddClasses/AddClasses";
import Dashboard from "./WebPages/Admin/Dashboard/Dashboard";
import Login from "./WebPages/Features/Login/Login";
import Registration from "./WebPages/Features/Registration/Registration";
import MyNavbar from "./WebPages/Features/Navbar/MyNavbar";
import SingleClass from "./WebPages/Features/Home-Section/Classes/SingleClass";
import OurService from "./WebPages/Features/OurService/OurService";
import NotFound from "./WebPages/NotFound/NotFound";
import CustomSpinner from "./WebPages/Features/CustomSpinner/CustomSpinner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddClasses />} />
          <Route path="/spin" element={<CustomSpinner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="services">
            <Route path=":userId" element={<SingleClass />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
