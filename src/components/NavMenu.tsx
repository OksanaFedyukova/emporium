import * as React from "react";
import { Link } from "gatsby";

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
  backgroundColor: "#333",
  color: "#fff",
};

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 1rem",
};

const NavMenu: React.FC = () => {
  return (
    <nav style={navStyles}>
      <Link to="/" style={linkStyles}>Home</Link>
      <Link to="/about" style={linkStyles}>About</Link>
      <Link to="/contact" style={linkStyles}>Contact</Link>
    </nav>
  );
};

export default NavMenu;