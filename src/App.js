import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Devices from "./Pages/Devices";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div className="">
      <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/devices" element={<Devices/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<ContactUs/>}/>
</Routes>

    </div>
  );
}

export default App;
