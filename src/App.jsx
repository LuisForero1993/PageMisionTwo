import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Info from './pages/Info';
import ERD from './pages/ERD';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/erd" element={<ERD />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
