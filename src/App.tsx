import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import FeaturesPage from "./pages/Features/FeaturesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
       <Route path="/features" element={<FeaturesPage />} />
    </Routes>
  );
}

export default App;