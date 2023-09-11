import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./slide.css"

const frameStyles = {
  height: '100%'
}

export default function Slide({ location, children }) {
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
      {/* Borrowed styles from Ash Kyd IX camp (Thanks) */}
      <div className="interactive-frame" style={frameStyles}>
        <div className="balloon">
          <div className="body"></div>
          <div className="basket"></div>
          <div className="alt">A hot air balloon bobs in the sunset sky.</div>
        </div>

        <div className="tent left">
          <div className="inner"></div>
          <div className="shadow"></div>
          <div className="alt">A tent on the hillside.</div>
        </div>

        <div className="tent right">
          <div className="inner"></div>
          <div className="shadow"></div>
          <div className="alt">Another tent pitched near the first.</div>
        </div>

        <div className="campfire">
            <div className="glow"></div>
            <div className="logs"></div>
            <div className="flame f1"></div>
            <div className="flip"><div className="flame f2"></div></div>
            <div className="flame f3"></div>
            <div className="alt">A campfire crackles, illuminating the campsite.</div>
        </div>

        <div className="tree left-tree"><div className="main"></div><div className="shadow"></div><div className="alt">A tree sways in the breeze</div></div>
        <div className="tree right-tree"><div className="main"></div><div className="shadow"></div><div className="alt">Another sways on yonder hill.</div></div>

        <div className="hills"></div>

        {children}
      </div>
      
      
    </React.Fragment>
  );

}
