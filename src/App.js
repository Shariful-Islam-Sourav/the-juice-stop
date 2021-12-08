import "./App.css";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
