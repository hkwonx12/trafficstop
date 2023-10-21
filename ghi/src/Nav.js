import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          MainPage
        </NavLink>
        <button type="button" className="btn btn-light">
          <NavLink to="login">Login</NavLink>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
