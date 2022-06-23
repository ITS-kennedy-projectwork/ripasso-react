import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import SchedeList from './components/schede/List'
import SchedeDetails from './components/schede/Details'
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

const Home = () => <div>Home</div>
const About = () => <div><b>About</b></div>

function App() {
  return (
    <div className="App">
      <Header />

      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />

          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
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
