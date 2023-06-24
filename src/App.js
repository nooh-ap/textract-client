import "./App.css";
import UploadImage from "./UploadImage/UploadImage";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

function App() {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="grid grid-rows-3 h-96 text-center">
      <Header className="bg-teal-300" />
      <div className="flex-col  ">
        <UploadImage />
      </div>

      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
