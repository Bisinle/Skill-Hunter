export default function Navbar() {
  const path = window.location.pathname
  return (
    <div className="nav-bar">
      <header>
        <nav>
          <h1>
            SKILL <span>HUNTER</span>
          </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function CustomLink({href, children, ...props }) {
  return (
      <li>
          <a href={href}>{children}</a>
      </li> 
  )
}