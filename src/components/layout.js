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
                  href="/docs"
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
                  href="/introduction"
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
        {!isFrontpage && (
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
              height: '100%',
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
                <a href="/introduction">Get Started</a>
              </button>
              <ul>
                <li>
                  <a href="/introduction">Get Started</a>
                </li>
                <li>
                  <a href="/introduction">What is Plone/Volto?</a>
                </li>
                <li>
                  <a href="/logging-in">Logging in</a>
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
                <a
                  href="first-steps"
                  style={{ textDecoration: 'none', color: 'rgb(109,109,109)' }}
                >
                  {' '}
                  First Steps
                </a>
              </button>
              <ul>
                <li>
                  <a href="edit-page" style={{ color: 'black' }}>
                    Seite bearbeiten
                  </a>
                </li>
                <li>
                  <a href="create-page" style={{ color: 'black' }}>
                    Seite erstellen
                  </a>
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
                <a href="/formatting"> Inline Styles</a>
              </button>
              <ul>
                <li>
                  <a href="/formatting">Textformatierung</a>
                </li>
                <li>
                  <a href="/extern-links">Externe Links</a>
                </li>
                <li>
                  <a href="intern-links" style={{ color: 'black' }}>
                    Interne Links
                  </a>
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
                <a href="/upload-images"> Bilder hinzufügen</a>
              </button>
              <ul>
                <li>
                  <a href="/upload-images">Bilder hochladen</a>
                </li>
                <li>
                  <a
                    href="/link-images"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    Bilder einbinden
                  </a>
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
                <a href="/composite-page"> Übersichtsseiten</a>
              </button>
              <ul>
                <li>
                  <a href="/composite-page">Übersichtsseiten</a>
                </li>
                <li>
                  <a href="/create-composite-page">
                    Übersichtsseiten erstellen
                  </a>
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
                <a href="/tags"> Schlagwörter</a>
              </button>
              <ul>
                <li>
                  <a href="/tags">Schlagwörter</a>
                </li>
                <li>
                  <a href="/create-tags">Schlagwörter erstellen</a>
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
                <a
                  href="/create-news-page"
                  style={{ textDecoration: 'none', color: 'rgb(109,109,109)' }}
                >
                  Nachrichtenseiten erstellen
                </a>
              </button>
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
                  <a href="/multilingual-content">Mehrsprachige Inhalte</a>
                </button>
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
                  <a href="/more">Anhang/Sonstiges</a>
                </button>
                <ul>
                  <li>
                    <a href="/maps-block">Maps-Block</a>
                  </li>
                  <li>
                    <a href="/video-block">Video-Block</a>
                  </li>
                  <li>
                    <a href="/teaser-grid">Teaser-Grid</a>
                  </li>
                  <li>
                    <a href="/teaser-hero">Teaser-Hero</a>
                  </li>
                </ul>
              </div>
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
