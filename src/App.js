import "./App.css";
import Button from "@mui/material/Button";
function App() {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <div className="App">
      <h1>Track Reciept</h1>
      <div>
        <p>
          <label for="imageFile">Upload a photo of yourself:</label>
          <input type="file" id="imageFile" capture="environment" accept="image/*" />
        </p>
      </div>
    </div>
  );
}

export default App;
