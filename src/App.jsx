import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import VideoBackground from "./components/videoBackground";
import WhatsappButton from "./components/wspButton";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Testimonials from "./pages/testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Header />
        <VideoBackground />
        <Routes>
          <Route path={"/"} element={<AboutUs />} />
          <Route path={"/"} element={<Contact />} />
          <Route path={"/"} element={<Testimonials />} />
        </Routes>
        <Testimonials />
        <Footer />
        <WhatsappButton />
      </div>
    </>
  );
}

export default App;
