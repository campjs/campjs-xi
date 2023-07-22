import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      fontFamily: "'DM Sans',sans-serif",
      fontWeight: 400,
      letterSpacing: 1,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "1.45rem",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "left",
        }}
      >
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
          {menuLinks.map((link) => (
            <li
              key={link.name}
              style={{
                padding: "1rem",
              }}
            >
              <Link 
                className="nav-link"
                to={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
