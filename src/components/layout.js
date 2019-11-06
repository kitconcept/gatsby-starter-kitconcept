import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import KitconceptLogo from './kitconcept-logo.svg'
import PageTransition from 'gatsby-plugin-page-transitions'
import PloneLogo from './plone-icon2.svg'
import Img from 'gatsby-image'
import Header from './header'
import './layout.css'

const Layout = ({ children, data, isFrontpage, isDocs, isIntroduction }) => (
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
          {isFrontpage && (
            <header
              class="mainheader"
              style={{
                width: '100%',
                height: '480px',
                backgroundColor: '#282c34',
              }}
            >
              <div
                class="logobackgroundimage"
                style={{
                  margin: '0 auto',
                  maxWidth: '1500px',
                  paddingTop: '140px',
                  height: '480px',
                  textAlign: 'center',
                }}
              >
                {/* <img
                  src={PloneLogo}
                  style={{
                    display: 'block',
                    position: 'static',
                    marginLeft: '1000px',
                  }}
                ></img> */}
                <h1
                  style={{
                    color: '#0095D3',
                    lineHeight: '1.15',
                    fontSize: '60px',
                    paddingBottom: '0',
                    marginTop: 0,
                    marginBottom: '20px',
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
                    width: '1500px',
                    margin: '0 auto',
                  }}
                >
                  Plone - Open Source CMS
                </p>
                <div
                  style={{
                    display: 'flex',
                    paddingTop: '40px',
                    paddingLeft: '30px',
                  }}
                >
                  <a
                    class="getstarted"
                    href="/introductionpage"
                    style={{
                      backgroundColor: '#0095D3',
                      fontSize: '20px',
                      color: '#000000',
                      marginLeft: '37%',
                      marginTop: '20px',
                      padding: '10px 25px',
                      paddingTop: '15px',
                      paddingBottom: '15px',
                    }}
                  >
                    Get Started
                  </a>
                  <a
                    class="gototraining"
                    href="/introduction"
                    style={{
                      color: '#0095D3',
                      display: 'inline-block',
                      fontSize: '20px',
                      backgroundColor: 'inherit',
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
                position: 'fixed',
                right: '0',
                flexDirection: 'column',
                paddingTop: '80px',
                paddingRight: '20px',
                backgroundColor: 'rgb(247,247,247)',
                width: '12%',
                paddingLeft: '40px',
                height: '100%',
                top: '40px',
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
                  <a
                    href="/inline-styles"
                    style={{ color: 'rgb(109,109,109)' }}
                  >
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
                  <a
                    href="/upload-images"
                    style={{ color: 'rgb(109,109,109)' }}
                  >
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
                  <a
                    href="/composite-page"
                    style={{ color: 'rgb(109,109,109)' }}
                  >
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
                  <a href="/create-tags" style={{ color: 'rgb(109,109,109)' }}>
                    {' '}
                    Schlagwörter
                  </a>
                </button>
                <ul>
                  <li>
                    <a href="/create-tags">Schlagwörter erstellen</a>
                  </li>
                  <li>
                    <a href="/tags">Bilder über Schlagwörter finden</a>
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
                    href="/create-news-pages"
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
          {isIntroduction && (
            <div
              style={{
                margin: '0 auto',
                maxWidth: '1220px',
                zIndex: '1',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          )}
          {!isIntroduction && (
            <div
              style={{
                margin: '0 auto',
                maxWidth: '840px',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          )}
          {isFrontpage && (
            <div
              style={{
                backgroundColor: '#282c34',
                display: 'block',
                height: '123px',
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
                  maxWidth: '960px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              >
                <a
                  class="getstarted"
                  href="./introductionpage"
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
                  class="gototraining"
                  href="/introduction"
                  style={{
                    color: '#0095D3',
                    display: 'inline-block',
                    fontSize: '20px',
                    backgroundColor: 'inherit',
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
                    <div
                      style={{ display: 'block', color: 'rgb(0, 149, 211)' }}
                    >
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
                    <a class="menupoints">Einführung</a>
                    <a class="menupoints">Erste Schritte</a>
                    <a class="menupoints">Inline Styles</a>
                    <a class="menupoints">Bilder hinzufügen</a>
                    <a class="menupoints">Übersichtsseiten</a>
                    <a class="menupoints">Schlagwörter</a>
                    <a class="menupoints">Nachrichtenseiten erstellen</a>
                    <a class="menupoints">Mehrsprachige Inhalte</a>
                    <a class="menupoints">Anhang/Sonstiges</a>
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
                    <a class="menupoints">Maps-Block</a>
                    <a class="menupoints">Video-Block</a>
                    <a class="menupoints">Teaser-Grid</a>
                    <a class="menupoints">Teaser</a>
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
                    <a class="menupoints">Foo</a>
                    <a class="menupoints">Kitconcept GmbH</a>
                    <a class="menupoints">Plone Foundation</a>
                    <a class="menupoints">Volto</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </PageTransition>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
