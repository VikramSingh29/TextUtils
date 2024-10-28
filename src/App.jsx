import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import { useState } from "react";
import Alert from "./Alert";
import About from './About';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("black");
  const [btncolor, setbtnColor] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("white");
      document.body.style.backgroundColor = "#4a4e69";
      setbtnColor("light");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setColor("black");
      document.body.style.backgroundColor = "#ffffff";
      setbtnColor("dark");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} color={color} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Form heading="Enter Your Text Below" mode={mode} btncolor={btncolor} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
