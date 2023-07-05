import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import UploadPage from "./Pages/UploadDocument/UploadPage";

function App() {
  return (
    <div id="page-container">
      <Navbar />
        <div id="content-wrap">
            <UploadPage />
        </div>
        <div id="footer">
            <Footer  />
        </div>
    </div>
  );
}

export default App;
