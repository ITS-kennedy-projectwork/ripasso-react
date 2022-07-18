import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SchedeList from './components/schede/List'
import SchedeDetails from './components/schede/Details'
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import { useState } from 'react';

const Home = () => <div>Home</div>
const About = () => <div><b>About</b></div>

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const mainClass = sidebarOpen 
   ? 'col-md-9 ms-sm-auto col-lg-10 px-md-4'
   : 'col ms-sm-auto px-md-4'

  return (
    <div className="App">
      <Header />

      <div className='container-fluid'>
        <div className='row'>
          <Sidebar open={sidebarOpen} callback={setSidebarOpen} />

          <main className={mainClass}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/schede" element={<SchedeList />} />
              <Route path="/schede/:id" element={<SchedeDetails />} />
            </Routes>
          </main>
        </div>
      </div>
      
    </div>
  );
}

export default App;
