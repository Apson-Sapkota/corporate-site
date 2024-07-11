import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import News1 from "./pages/News1";
import News2 from "./pages/News2";
import News3 from "./pages/News3";
import Swipe from "./Swipe";
import Countingup from "./Countingup";



function App() {
  return (
    <>
 
      <BrowserRouter>
      <Header />
        <Routes>
        
          <Route path="/1" element={<News1 />} />
          <Route path="/2" element={<News2 />} />
          <Route path="/3" element={<News3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
