import './App.css';
import { BrowserRouter } from "react-router-dom";
import { MainRoute } from "./Routes/MainRoute";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="src/Assets//Assets/https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <BrowserRouter>
      <MainRoute />
  </BrowserRouter>
>>>>>>> 17c05e3bd20d47a70d208091a698828da71ffc54
  );
}

export default App;
