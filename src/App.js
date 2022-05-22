import "./App.css";
import Main from "./components/layout/main";
import { CookiesProvider } from "react-cookie";
function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Main />
      </div>
    </CookiesProvider>
  );
}

export default App;
