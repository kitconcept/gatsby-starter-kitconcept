import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, data, isFrontpage }) => (
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
        {isFrontpage && (
          <header
            class="mainheader"
            style={{
              width: '100%',
              height: '420px',
              backgroundColor: '#282c34',
              padding: '100px',
            }}
          >
            <div
              style={{
                margin: '0 auto',
                maxWidth: '960px',
                paddingTop: '0',
                width: '100%',
                height: '420px',
                textAlign: 'center',
              }}
            >
              <h1
                style={{
                  color: '#0095D3',
                  lineHeight: '1.15',
                  fontSize: '60px',
                  paddingBottom: '0',
                  marginTop: 0,
                }}
              >
                Plone Schulungen
              </h1>
              <p
                style={{
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: '200',
                  marginTop: '0',
                }}
              >
                Plone - Open Source CMS
              </p>
              <div style={{ display: 'flex' }}>
                <a
                  href="/"
                  style={{
                    backgroundColor: '#0095D3',
                    fontSize: '20px',
                    color: '#000000',
                    marginLeft: '30%',
                    marginTop: '20px',
                    padding: '10px 25px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                  }}
                >
                  Get Started
                </a>
                <a
                  href="/"
                  style={{
                    color: '#0095D3',
                    display: 'inline-block',
                    fontSize: '20px',
                    backgroundColor: '#282c34',
                    marginTop: '20px',
                    padding: '10px 25px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                  }}
                >
                  Weiter zur Schulung >
                </a>
              </div>
            </div>
          </header>
        )}

        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
