import { Outlet, NavLink, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="landing-container">
      <header className="main-header">
        <div className="header-left">
          <Link to="/">
            <img src="/logo.png" alt="LEM Logo" className="app-logo" />
          </Link>
        </div>

        <div className="header-middle">
          <h2 className="pg-name">LEM - Lokenath Engineering Mess</h2>
        </div>
        
        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/facilities" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Facilities</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </nav>

        <div className="header-right">
          <Link to="/contact">
            <button className="btn-primary btn-sm">Enquire Now</button>
          </Link>
        </div>
      </header>
      
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
