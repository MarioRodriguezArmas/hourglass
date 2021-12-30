import "../src/style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "../src/views/Login";
import Monday from "../src/views/Monday";
import UploadImage from "../src/views/UploadImage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/upload" element={<UploadImage />} />
          <Route path="/monday" element={<Monday />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
