import "./App.scss";
import { Outlet } from "react-router-dom";
import RoutesNavigate from "./routes/RoutesNavigate";
function App() {
  return (
    <div className="App">
      <RoutesNavigate />
    </div>
  );
}

export default App;
