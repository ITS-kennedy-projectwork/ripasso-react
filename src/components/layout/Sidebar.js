import { Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'

const Sidebar = (props) => {
    const {open} = props

    const navClass = `col-md-${open ? 3 : 1} col-lg-${open ? 2 : 1} d-md-block bg-light sidebar collapse show`

    return <nav className={navClass}>
    <ul className="mt-5">
      <li><Link to={'/'}>Home <i className="bi-alarm" /></Link></li>
      <li><Link to={'/about'}>About <i className="bi-alarm" /></Link></li>
      <li><Link to={'/schede'}>Schede <i className="bi-alarm" /></Link></li>
    </ul>
  </nav>
}

export default Sidebar