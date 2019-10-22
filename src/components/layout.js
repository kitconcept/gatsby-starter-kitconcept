import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, data, isFrontpage, isDocs }) => (
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
                    borderBottom: 'none',
                  }}
                >
                  Weiter zur Schulung >
                </a>
              </div>
            </div>
          </header>
        )}
        {isDocs && (
          <nav
            class="sidebarnav"
            style={{
              display: 'flex',
              position: 'absolute',
              right: '0',
              flexDirection: 'column',
              paddingTop: '80px',
              paddingRight: '20px',
              backgroundColor: 'rgb(247,247,247)',
              width: '12%',
              paddingLeft: '40px',
            }}
          >
            <div>
              <button
                style={{
                  color: 'rgb(109, 109, 109)',
                  backgroundColor: 'rgb(247,247,247)',
                  fontWeight: '700',
                  lineHeight: '3',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  border: 'none',
                  display: 'inline-block',
                }}
              >
                Get Started
              </button>
              <ul>
                <li>
                  <a>Get Started</a>
                </li>
                <li>
                  <a>What is Plone/Volto?</a>
                </li>
                <li>
                  <a>Logging in</a>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{
                  color: 'rgb(109, 109, 109)',
                  backgroundColor: 'rgb(247,247,247)',
                  fontWeight: '700',
                  lineHeight: '3',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  border: 'none',
                  display: 'inline-block',
                }}
              >
                First Steps
              </button>
              <ul>
                <li>
                  <a>Seite bearbeiten</a>
                </li>
                <li>
                  <a>Seite erstellen</a>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{
                  color: 'rgb(109, 109, 109)',
                  backgroundColor: 'rgb(247,247,247)',
                  fontWeight: '700',
                  lineHeight: '3',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  border: 'none',
                  display: 'inline-block',
                }}
              >
                Inline Styles
              </button>
              <ul>
                <li>
                  <a>Textformatierung</a>
                </li>
                <li>
                  <a>Externe Links</a>
                </li>
                <li>
                  <a>Interne Links</a>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{
                  color: 'rgb(109, 109, 109)',
                  backgroundColor: 'rgb(247,247,247)',
                  fontWeight: '700',
                  lineHeight: '3',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  border: 'none',
                  display: 'inline-block',
                }}
              >
                Bilder hinzufügen
              </button>
              <ul>
                <li>
                  <a>Bilder hochladen</a>
                </li>
                <li>
                  <a>Bilder einbinden</a>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{
                  color: 'rgb(109, 109, 109)',
                  backgroundColor: 'rgb(247,247,247)',
                  fontWeight: '700',
                  lineHeight: '3',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  border: 'none',
                  display: 'inline-block',
                }}
              >
                Übersichtsseiten
              </button>
              <ul>
                <li>
                  <a>Übersichtsseiten</a>
                </li>
                <li>
                  <a>Übersichtsseiten erstellen</a>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{
                  color: 'rgb(109, 109, 109)',
                  backgroundColor: 'rgb(247,247,247)',
                  fontWeight: '700',
                  lineHeight: '3',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  border: 'none',
                  display: 'inline-block',
                }}
              >
                Schlagwörter
              </button>
              <ul>
                <li>
                  <a>Schlagwörter</a>
                </li>
                <li>
                  <a>Schlagwörter erstellen</a>
                </li>
              </ul>
            </div>
            <div>
              <button
                style={{
                  color: 'rgb(109, 109, 109)',
                  backgroundColor: 'rgb(247,247,247)',
                  fontWeight: '700',
                  lineHeight: '3',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  border: 'none',
                  display: 'inline-block',
                }}
              >
                Nachrichtenseiten erstellen
              </button>
            </div>
          </nav>
          // </div>
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
