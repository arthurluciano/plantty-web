import { Link } from "react-router-dom";
import "./styles.css";

type SidebarProps = {
  page: string;
};

export function Sidebar({ page }: SidebarProps) {
  return (
    <nav className={`sidebar ${page}`}>
      <span className="title">Plantty</span>
      <div className="nav-container">
        <ul className="nav-button">
          <li>
            <Link to="/dashboard">
              <i
                className={`bx bxs-dashboard ${
                  page === "dashboard" ? "active" : ""
                }`}
              ></i>
            </Link>
          </li>
          <li>
            <Link to="/insert">
              <i className={`bx bx-plus ${page === "insert" ? "active" : ""}`}></i>
            </Link>
          </li>
          <li>
            <Link to="/edit">
              <i
                className={`bx bx-edit-alt ${page === "edit" ? "active" : ""}`}
              ></i>
            </Link>
          </li>
        </ul>
        <div className="selected"></div>
      </div>
      <span className="logout">
        <a href="/login">Sair</a>
      </span>
    </nav>
  );
}
