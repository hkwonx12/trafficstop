import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/">MainPage</NavLink>
      </div>
      <div>
        <NavLink to="login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
