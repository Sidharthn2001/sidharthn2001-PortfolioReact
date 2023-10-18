import { Outlet, Link } from "react-router-dom";
import './layout.css';
// import {useNavigate} from "react-router-dom";

const Layout = () => {
//   const navigate = useNavigate();
//  const handleBack = () => {
//   navigate('/')
// }
// const toForm = () =>{
//  navigate('/contact')
//  }
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg" id="navbar">
          <div className="container-fluid nav-container">
            <div className="container-fluid nav-container">
              <a className="navbar-brand" href="#">Portfolio</a>
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">About</a>
                    {/* <a onClick={handleBack} href="#about" className="menuBtn">
                    <strong>About</strong> */}
                    {/* </a> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#skill">Skills</a>
                    {/* <a onClick={handleBack} href="#about" className="menuBtn">
                    <strong>Skills</strong></a> */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#experience">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#project">Project</a>
                  </li>
                  <Link to="/contact" className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
      <footer>
        <a href="https://github.com/Sidharthn2001"
        ><i className="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/sidharth-udaykumar-3250a9250/"
        ><i className="bi bi-linkedin"></i></a>
        <a
          href=""
        ><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/_sidharth.sidhu/"
        ><i className="bi bi-instagram"></i></a>
      </footer>

    </>
  )
}
export default Layout;