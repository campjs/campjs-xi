import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: '100px auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
}

export default function Layout({ location, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            url
          }
        }
      }
    }
  `)
  const currentPage = data.site.siteMetadata.menuLinks.find(link => link.url === location.pathname) || {};

  return (
    <React.Fragment>
      <Helmet
        title={`${data.site.siteMetadata.title} - ${currentPage.name}`}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      >
      </Helmet>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div style={pageStyles}>
        {children}
      </div>
    </React.Fragment>
  );

}
