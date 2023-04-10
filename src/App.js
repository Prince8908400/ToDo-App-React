import "./App.css";
import { Todos } from "./pages/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <main>
        <Todos />
        <ToastContainer position="bottom-center"/>
      </main>
    </div>
  );
}

export default App;
