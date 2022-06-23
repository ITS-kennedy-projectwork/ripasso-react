import { Link } from "react-router-dom"

const Sidebar = () => {
    return <nav className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse show'>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about'}>About</Link></li>
      <li><Link to={'/schede'}>Schede</Link></li>
    </ul>
  </nav>
}

export default Sidebar