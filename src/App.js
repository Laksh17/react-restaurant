import Navbar from './Navbar';
import { BrowserRouter as MainRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';

function App() {
  return (
    <MainRouter>
      <div className="main-app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={
              <Menu />
            } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </MainRouter>
  );
}

export default App;
