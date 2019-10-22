import React from 'react'
import { Link } from 'gatsby'
import sharedStyles from '../pages/theme'
import Styles from '../pages/styles'
import BigHeader from '../components/bigheader'
import Layout from '../components/layout'

const DocsPage = () => (
  <Layout>
    <sharedStyles>
      <div
        style={{
          transition: 'opacity 0.5s ease 0s',
          display: 'block',
          borderLeft: '1px solid rgb(236,236,236)',
          backgroundColor: 'rgb(247,247,247)',
          opacity: '1',
        }}
      >
        <div
          class={{
            display: 'block',
          }}
        >
          <nav
            class="sidebarnav"
            style={{
              display: 'flex',
            }}
          >
            <div>
              <button>Get Started</button>
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
              <button>First Steps</button>
              <ul>
                <li>
                  <a></a>
                </li>
                <li>
                  <a></a>
                </li>
              </ul>
            </div>
            <div></div>
            <div></div>
          </nav>
        </div>
      </div>
      <p style={{ marginTop: '100px' }}>
        Plone/Volto ist ein sogenanntes Content-Management-System (CMS), welches
        ihnen erlaubt, ihre Webseite auch ohne Programmierkenntnisse mit Inhalt
        zu füllen. Darüber hinaus können sie die Inhalte ihrer Webseite
        jederzeit ändern, löschen oder für eine bestimmte Dauer deaktivieren. Im
        Nachfolgenden werden ihnen die Grundkenntnisse von Plone/Volto erklärt,
        und sie werden bereits nach kürzester Zeit ihre ersten Seiten erstellen
        und mit Inhalten füllen können.
      </p>
      <h2>Inhaltsverzeichnis</h2>
      <ol>
        <li>
          <Link to="/page-2/">Einloggen</Link>{' '}
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Seite editieren</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Seite erstellen</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Textformatierung</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Externe Links</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Interne Links</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Bilder hochladen</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Bilder einbinden</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Schlagwörter</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Übersichtsseite</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Übersichtsseite erstellen</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Schlagwörter erstellen</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Nachrichtenseite erstellen</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Mehrsprachige Inhalte</Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/">Go to page 2</Link>
        </li>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
      </ol>
      <br></br>
      <Link to="/styles">Styles</Link>
    </sharedStyles>
  </Layout>
)

export default DocsPage
