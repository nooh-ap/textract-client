import "./App.css";
import Landing from "./Pages/LandingPage/Landing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import UploadPage from "./Pages/UploadDocument/UploadPage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Landing /> */}
      <UploadPage />
      <Footer />
    </div>
  );
}

export default App;
