import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        🏕 CampJS
        <br />
        <span style={headingAccentStyles}>3 night javascript code retreat</span>
      </h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Fri 3rd - Mon 6th November 2023</code>
      </p>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Koonjewarre, Springbrook, QLD, Australia</code>
      </p>
      <p style={paragraphStyles}>
        <a href="https://ti.to/campjs/campjs-xi" rel="noopener noreferrer" target="_blank">Early bird tickets</a> available now.
      </p>
      <img src={'tent.svg'} alt="CampJS Tent Logo" />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
