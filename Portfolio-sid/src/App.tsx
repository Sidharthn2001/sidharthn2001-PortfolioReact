import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './pages/layout/Layout';
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from './pages/ContactForm/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Portfolio />} />
          <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
