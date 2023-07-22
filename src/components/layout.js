import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: '0px auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  zIndex: 5,
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
      {/* Borrowed styles from Ash Kyd IX camp (Thanks) */}
      <div class="interactive-frame">
        <div class="balloon">
          <div class="body"></div>
          <div class="basket"></div>
          <div class="alt">A hot air balloon bobs in the sunset sky.</div>
        </div>

        <div class="tent left">
          <div class="inner"></div>
          <div class="shadow"></div>
          <div class="alt">A tent on the hillside.</div>
        </div>

        <div class="tent right">
          <div class="inner"></div>
          <div class="shadow"></div>
          <div class="alt">Another tent pitched near the first.</div>
        </div>

        <div class="campfire">
            <div class="glow"></div>
            <div class="logs"></div>
            <div class="flame f1"></div>
            <div class="flip"><div class="flame f2"></div></div>
            <div class="flame f3"></div>
            <div class="alt">A campfire crackles, illuminating the campsite.</div>
        </div>

        <div class="tree left-tree"><div class="main"></div><div class="shadow"></div><div class="alt">A tree sways in the breeze</div></div>
        <div class="tree right-tree"><div class="main"></div><div class="shadow"></div><div class="alt">Another sways on yonder hill.</div></div>

        <div class="hills"></div>

        <div id="intro">
          <h1>CampJS</h1>
          <div class="date">Fri 3rd - Mon 6th November 2023</div>
          <div class="location">Koonjewarre, Springbrook, QLD</div>
        </div>
      </div>
      <div style={pageStyles}>
        {children}
      </div>
      <img src={'/tent.svg'} style={{maxWidth:'80%'}} alt="CampJS Tent Logo" />
      
    </React.Fragment>
  );

}
