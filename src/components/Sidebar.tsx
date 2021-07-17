import "../styles/sidebar.css";

type SidebarProps = {
  page: string;
}

export function Sidebar({ page }: SidebarProps) {
  return (
    <nav className={`sidebar ${page}`}>
      <span className="title">Plantty</span>
      <div className="nav-container">
        <ul className="nav-button">
          <li>
            <a href="/dashboard">
              <i className={`bx bxs-dashboard ${page === 'dashboard' && "active"}`}></i>
            </a>
          </li>
          <li>
            <a href="/insert">
              <i className={`bx bx-plus ${page === 'insert' && "active"}`}></i>
            </a>
          </li>
          <li>
            <a href="/edit">
              <i className={`bx bx-edit-alt ${page === 'edit' && "active"}`}></i>
            </a>
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
