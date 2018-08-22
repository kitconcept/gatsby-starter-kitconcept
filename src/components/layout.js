import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

import Header from './header'
import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <PageTransition
          defaultStyle={{
            transition: 'opacity 250ms ease-in-out',
            opacity: '0',
          }}
          transitionStyles={{
            entering: { opacity: '0' },
            entered: { opacity: '1.0' },
            exiting: { opacity: '0' },
          }}
          transitionTime={500}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </PageTransition>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
