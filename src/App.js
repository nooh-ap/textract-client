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
        <Button onClick={() => onClick()} variant="contained">Scan</Button>
      </div>
    </div>
  );
}

export default App;
