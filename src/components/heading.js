import React from "react"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  color: 'white',
  fontSize:'48px',
  fontWeight:'black',
  textShadow:'3px 3px 0 #ff2a7f',
}

export default function Heading({ children }) {
   return (
    <h1 style={headingStyles}>
      {children}
    </h1>
  );

}
