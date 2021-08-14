import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = props => {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>oCombat</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-md-auto gap-2 ml-auto">
        {/* <li className="nav-item rounded">
          <Link className="nav-link active" aria-current="page" to="/home"><i className="bi bi-house-fill me-2"></i>Home</Link>
        </li>
        <li className="nav-item rounded">
          <a className="nav-link" href="#"><i className="bi bi-people-fill me-2"></i>About</a>
        </li> */}
        <li className="nav-item rounded">
          <Link className="nav-link" to="/tournaments"><i className="bi bi-telephone-fill me-2"></i>Tournament</Link>
        </li>
        <li className="nav-item rounded">
          <a className="nav-link" href="#"><i className="bi bi-telephone-fill me-2"></i>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Navbar