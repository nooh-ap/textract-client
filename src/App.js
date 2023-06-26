import "./App.css";
import UploadImage from "./UploadImage/UploadImage";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import {
  HeroLayout1 
 } from './ui-components';
 
function App() {
  const onClick = () => {
    console.log("clicked");
  };

  return (<div>
    <HeroLayout1 />
  </div>
  );
}

export default App;

{/* <div className="grid grid-rows-3 h-96 text-center">
<Header className="" />
<div className="flex-col  ">
  <UploadImage />
</div>

<div className="fixed bottom-0">
  <Footer />
</div>
</div> */}