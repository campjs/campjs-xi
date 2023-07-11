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
      <Link
        to="/"
        style={{
          margin: 10,
          position: "fixed",
          top: 0,
          left: 0,
          right: "auto",
          fontFamily: "monospace",
          fontWeight: 600,
          fontSize: "3rem",
          color: "black",
          textDecoration: "none",
        }}
      >
        CAMPJS<br />
        XI
      </Link>
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
                style={{ 
                  color: "black",
                  // textDecoration: 'none',
                  // only underline if on hover or active
                  // '&:focus, &:hover, &:visited, &:link, &:active': {
                  //   textDecoration: 'underline',
                  // },
                  // '&:hover': {
                  //   textDecoration: 'underline',
                  //   background: "#efefef"
                  // },
                }} 
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
