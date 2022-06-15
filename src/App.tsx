import Home from "./components/Home";
import Resume from "./components/Resume";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Resume />
    </div>
  );
}

export default App;
