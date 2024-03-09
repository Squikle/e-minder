import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import classname from "classname";
import { useAuthContext } from "../../contexts/AuthContext/useAuthContext";

export function Navbar() {
  const setActiveClass = ({ isActive }) =>
    classname(styles.link, { [styles.active]: isActive });
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    authContext.logout();
    navigate("/login");
  };

  const authLinks = (
    <>
      <li>
        <NavLink to="/" className={setActiveClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={setActiveClass}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/sets" className={setActiveClass}>
          Sets
        </NavLink>
      </li>
      <li>
        <a className={styles.logout} onClick={logout}>
          Logout
        </a>
      </li>
    </>
  );

  return (
    <header>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.headerContentLogo}>
          Eminder
        </Link>

        <nav className={styles.headerContentNav}>
          <ul>{authContext.authorized && authLinks}</ul>
        </nav>
      </div>
    </header>
  );
}
