import { Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './sidebar.css'

const Sidebar = (props) => {
    const {open, callback} = props

    const navClass = `col-md-${open ? 3 : 1} col-lg-${open ? 2 : 1} d-md-block bg-light sidebar collapse show ${open ? 'sidebar-open' : 'sidebar-closed'}`

    return (
    <nav className={navClass}>
      <button id="sidebar-trigger" onClick={() => callback(!open)}>
        {open && <i className="bi bi-arrow-bar-left" />}
        {!open && <i className="bi bi-arrow-bar-right" />}
      </button>

      <ul className="mt-5">
        <li><Link to={'/'}><span>Home </span><i className="bi bi-house" /></Link></li>
        <li><Link to={'/about'}><span>About </span><i className="bi bi-info-square" /></Link></li>
        <li>
          <Link to={'/schede'}><span>Schede </span><i className="bi bi-card-checklist" /></Link>
          <ul>
            <li> <Link to={'/schede/new'}><span>Nuova </span><i className="bi bi-plus-circle" /></Link></li>
          </ul>
        </li>
      </ul>
    </nav>
    )
}

export default Sidebar