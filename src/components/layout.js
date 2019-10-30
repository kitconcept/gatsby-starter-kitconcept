import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import KitconceptLogo from './kitconcept-logo.svg'

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
                <a href="/introduction" style={{ color: 'rgb(109,109,109)' }}>
                  Einführung
                </a>
              </button>
              <ul>
                <li>
                  <a href="/introduction">Einführung</a>
                </li>
                <li>
                  <a href="/whats-plone">Was ist Plone/Volto?</a>
                </li>
                <li>
                  <a href="/logging-in">Einloggen</a>
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
                <a href="first-steps" style={{ color: 'rgb(109,109,109)' }}>
                  {' '}
                  Erste Schritte
                </a>
              </button>
              <ul>
                <li>
                  <a href="edit-page">Seite bearbeiten</a>
                </li>
                <li>
                  <a href="create-page">Seite erstellen</a>
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
                <a href="/inline-styles" style={{ color: 'rgb(109,109,109)' }}>
                  {' '}
                  Inline Styles
                </a>
              </button>
              <ul>
                <li>
                  <a href="/formatting">Textformatierung</a>
                </li>
                <li>
                  <a href="/extern-links">Externe Links</a>
                </li>
                <li>
                  <a href="intern-links">Interne Links</a>
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
                <a href="/upload-images" style={{ color: 'rgb(109,109,109)' }}>
                  {' '}
                  Bilder hinzufügen
                </a>
              </button>
              <ul>
                <li>
                  <a href="/upload-images">Bilder hochladen</a>
                </li>
                <li>
                  <a href="/link-images">Bilder einbinden</a>
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
                <a href="/composite-page" style={{ color: 'rgb(109,109,109)' }}>
                  {' '}
                  Übersichtsseiten
                </a>
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
                <a href="/tags" style={{ color: 'rgb(109,109,109)' }}>
                  {' '}
                  Schlagwörter
                </a>
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
                  style={{ color: 'rgb(109,109,109)' }}
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
                  <a
                    href="/multilingual-content"
                    style={{ color: 'rgb(109,109,109)' }}
                  >
                    Mehrsprachige Inhalte
                  </a>
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
                  <a href="/more" style={{ color: 'rgb(109,109,109)' }}>
                    Anhang/Sonstiges
                  </a>
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
        {isFrontpage && (
          <div
            style={{
              backgroundColor: '#282c34',
              display: 'block',
              height: '123px',
              width: '100%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <div
              style={{
                display: 'block',
                paddingTop: '20px',
                maxWidth: '960px',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <a
                href="/docs"
                style={{
                  backgroundColor: '#0095D3',
                  display: 'inline-block',
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
        )}
        {!isFrontpage && (
          <div
            style={{
              backgroundColor: '#282c34',
              display: 'block',
              height: '160px',
              width: '100%',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '100px',
            }}
          >
            <div
              style={{
                display: 'block',
                paddingTop: '20px',
                maxWidth: '1220px',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <ul
                class="nextprev"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <li
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'block', color: 'rgb(0, 149, 211)' }}>
                    Vorherige Seite
                  </div>
                  <div
                    class="nextprev"
                    style={{
                      display: 'block',
                      paddingTop: '10px',
                      textAlign: 'left',
                    }}
                  >
                    <a
                      href=""
                      style={{
                        textDecoration: 'none',
                        backgroundColor: 'inherit',
                        color: 'white',
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderColor: 'rgb(109,109,109',
                        transition: 'border-color 0.2 ease 0s',
                        fontSize: '30px',
                      }}
                    >
                      Vorherige Seite
                    </a>
                  </div>
                </li>
                <li
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    textAlign: 'right',
                  }}
                >
                  <div
                    class="nextprev"
                    style={{ display: 'block', color: 'rgb(0, 149, 211)' }}
                  >
                    <div>Nächste Seite</div>
                    <div
                      style={{
                        display: 'block',
                        paddingTop: '10px',
                        textAlign: 'right',
                      }}
                    >
                      <a
                        href=""
                        style={{
                          textDecoration: 'none',
                          backgroundColor: 'inherit',
                          color: 'white',
                          borderBottomWidth: '1px',
                          borderBottomStyle: 'solid',
                          borderColor: 'rgb(109,109,109',
                          transition: 'border-color 0.2 ease 0s',
                          fontSize: '30px',
                        }}
                      >
                        Nächste Seite
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        <footer
          style={{
            display: 'block',
            backgroundColor: '#20232a',
            color: '#ffffff',
            height: '420px',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '1220px',
              margin: '0 auto',
              height: 'auto',
              display: 'flex',
            }}
          >
            <a
              href="plone.org"
              style={{
                backgroundColor: 'inherit',
                border: 'none',
                display: 'block',
                height: 'auto',
                width: 'auto',
                marginTop: '75px',
              }}
            >
              <img
                src={KitconceptLogo}
                style={{
                  width: '250px',
                  marginTop: '0px',
                  marginBottom: '0',
                }}
              />
            </a>
            <div
              class="footernav"
              style={{
                display: 'flex',
                marginLeft: '200px',
                marginTop: '20px',
              }}
            >
              <div
                class="docs"
                style={{
                  display: 'flex',
                  marginTop: '20px',
                }}
              >
                <div
                  class="docscontent"
                  style={{ display: 'inline-flex', flexDirection: 'column' }}
                >
                  <div
                    class="docsheading"
                    style={{
                      color: '#999',
                      marginBottom: '13px',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Docs
                  </div>
                  <a>Einführung</a>
                  <a>Erste Schritte</a>
                  <a>Inline Styles</a>
                  <a>Bilder hinzufügen</a>
                  <a>Übersichtsseiten</a>
                  <a>Schlagwörter</a>
                  <a>Nachrichtenseiten erstellen</a>
                  <a>Mehrsprachige Inhalte</a>
                  <a>Anhang/Sonstiges</a>
                </div>
              </div>
              <div
                class="docs"
                style={{
                  display: 'flex',
                  marginTop: '20px',
                  marginLeft: '60px',
                }}
              >
                <div
                  class="docscontent"
                  style={{ display: 'inline-flex', flexDirection: 'column' }}
                >
                  <div
                    class="docsheading"
                    style={{
                      color: '#999',
                      marginBottom: '13px',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Mehr
                  </div>
                  <a>Maps-Block</a>
                  <a>Video-Block</a>
                  <a>Teaser-Grid</a>
                  <a>Teaser</a>
                </div>
              </div>
              <div
                class="docs"
                style={{
                  display: 'flex',
                  marginTop: '20px',
                  marginLeft: '80px',
                }}
              >
                <div
                  class="docscontent"
                  style={{ display: 'inline-flex', flexDirection: 'column' }}
                >
                  <div
                    class="docsheading"
                    style={{
                      color: '#999',
                      marginBottom: '13px',
                      fontSize: '14px',
                      fontWeight: '700',
                      lineHeight: '3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Credits
                  </div>
                  <a>Foo</a>
                  <a>Kitconcept GmbH</a>
                  <a>Plone Foundation</a>
                  <a>Volto</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
