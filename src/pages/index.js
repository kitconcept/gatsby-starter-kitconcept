import React from 'react'
import { Link } from 'gatsby'
import sharedStyles from '../pages/theme'
import Styles from '../pages/styles'
import BigHeader from '../components/bigheader'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout isFrontpage>
    <sharedStyles>
      <h1 style={{}}>Plone CMS</h1>
      <p style={{ marginTop: '10px', fontSize: '20px' }}>
        Plone/Volto ist ein sogenanntes Content-Management-System (CMS), welches
        ihnen erlaubt, ihre Webseite auch ohne Programmierkenntnisse mit Inhalt
        zu füllen. Darüber hinaus können sie die Inhalte ihrer Webseite
        jederzeit ändern, löschen oder für eine bestimmte Dauer deaktivieren. Im
        Nachfolgenden werden ihnen die Grundkenntnisse von Plone/Volto erklärt,
        und sie werden bereits nach kürzester Zeit ihre ersten Seiten erstellen
        und mit Inhalten füllen können.
      </p>
      <h2>Inhaltsverzeichnis</h2>
      <ul class="contents" style={{ listStyle: 'none' }}>
        <li>
          <Link
            to="/introduction/"
            style={{ fontSize: ' 24px', marginLeft: '20px' }}
          >
            Get Started
          </Link>{' '}
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>
              <Link to="/introduction/">What's Plone/Volto?</Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/logging-in/">Logging in</Link>{' '}
            </li>
          </ul>
        </li>
        <li>
          {' '}
          <Link
            to="/edit-page/"
            style={{
              fontSize: ' 24px',
              marginLeft: '20px',
            }}
          >
            First Steps
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>
              <Link to="/edit-page/">Seite bearbeiten</Link>{' '}
            </li>
            <li>
              <Link to="/create-page/">Seite erstellen</Link>{' '}
            </li>
          </ul>
        </li>
        <li>
          {' '}
          <Link
            to="/formatting/"
            style={{ fontSize: ' 24px', marginLeft: '20px' }}
          >
            Inline Styles
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>
              <Link to="/formatting/">Textformatierung</Link>{' '}
            </li>
            <li>
              <Link to="/extern-links/">Externe Links</Link>{' '}
            </li>
            <li>
              <Link to="/intern-links/">Interne Links</Link>{' '}
            </li>
          </ul>
        </li>
        <li>
          {' '}
          <Link
            to="/upload-images/"
            style={{ fontSize: ' 24px', marginLeft: '20px' }}
          >
            Bilder hinzufügen
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>
              <Link to="/upload-images/">Bilder hochladen</Link>{' '}
            </li>
            <li>
              <Link to="/link-images/">Bilder einbinden</Link>{' '}
            </li>
          </ul>
        </li>
        <li>
          {' '}
          <Link
            to="/composite-page/"
            style={{ fontSize: ' 24px', marginLeft: '20px' }}
          >
            Übersichtsseiten
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>
              <Link to="/composite-page/">Übersichtsseiten</Link>{' '}
            </li>
            <li>
              <Link to="/create-composite-page/">
                Übersichtsseiten erstellen
              </Link>{' '}
            </li>
          </ul>
        </li>
        <li>
          {' '}
          <Link to="/tags/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Schlagwörter
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>
              <Link to="/tags/">Verschlagwortung</Link>{' '}
            </li>
            <li>
              <Link to="/create-tags/">Schlagwörter erstellen</Link>{' '}
            </li>
          </ul>
        </li>
        <li style={{ marginBottom: '15px' }}>
          {' '}
          <Link
            to="/create-news-pages/"
            style={{
              fontSize: ' 24px',
              marginLeft: '20px',
            }}
          >
            Nachrichtenseiten erstellen
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          {' '}
          <Link
            to="/multilingual-content/"
            style={{ fontSize: ' 24px', marginLeft: '20px' }}
          >
            Mehrsprachige Inhalte
          </Link>
        </li>
        <li>
          {' '}
          <Link
            to="/more/"
            style={{
              fontSize: ' 24px',
              marginLeft: '20px',
            }}
          >
            Anhang/Sonstiges
          </Link>
          <ul>
            <li>
              <Link to="/maps-block/">Maps-Block</Link>{' '}
            </li>
            <li>
              <Link to="/video-block/">Video-Block</Link>{' '}
            </li>
            <li>
              <Link to="/teaser-grid/">Teaser-Grid</Link>{' '}
            </li>
            <li>
              <Link to="/teaser-hero/">Teaser-Hero</Link>{' '}
            </li>
          </ul>
        </li>
      </ul>
      <br></br>
    </sharedStyles>
  </Layout>
)

export default IndexPage
