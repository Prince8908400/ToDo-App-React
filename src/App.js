import "./App.css";
import Home from "./pages/Home";
// import { Todos } from "./pages/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <main>
        {/* <Todos /> */}
        <Home />
        <ToastContainer position="bottom-center"/>
      </main>
    </div>
  );
}

export default App;
