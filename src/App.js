import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div id="page-container">
      <Navbar />
        <div id="detail">
            <Outlet />
        </div>
        <div id="footer">
            <Footer  />
        </div>
    </div>
  );
}

export default App;
