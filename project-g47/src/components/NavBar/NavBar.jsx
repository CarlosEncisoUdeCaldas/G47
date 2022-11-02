import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <i className="bi bi-house" style={{ margin: "5px" }} />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contador">
                <i
                  className="bi bi-plus-slash-minus"
                  style={{ margin: "5px" }}
                />
                Contador
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/saludo">
                <i className="bi bi-hand-thumbs-up" style={{ margin: "5px" }} />
                Saludo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
