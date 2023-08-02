export default function Navbar() {
  const path = window.location.pathname
  return (
  <nav className= "nav">
      <a href="/" className="logo-title">
          SKILL HUNTER
      </a>
      <ul>
      <CustomLink href="/home">Home</CustomLink>
      <CustomLink href="/about">About</CustomLink>
      <CustomLink href="/help">Help</CustomLink>
      </ul>
  </nav>
  )
}

function CustomLink({href, children, ...props }) {
  return (
      <li>
          <a href={href}>{children}</a>
      </li> 
  )
}