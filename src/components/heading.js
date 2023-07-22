import React from "react"

const headingStyles = {
  marginTop: '40px',
  marginBottom: '50px',
  fontSize:'36px',
  fontWeight:'black',
}

export default function Heading({ children }) {
   return (
    <h1 style={headingStyles}>
      {children}
    </h1>
  );

}
