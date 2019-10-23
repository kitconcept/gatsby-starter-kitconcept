import React from 'react'
import { Link } from 'gatsby'
import sharedStyles from '../pages/theme'
import Styles from '../pages/styles'
import BigHeader from '../components/bigheader'
import Layout from '../components/layout'

const DocsPage = () => (
  <Layout>
    <sharedStyles>
      {/* <p style={{ marginTop: '100px' }}>
        Plone/Volto ist ein sogenanntes Content-Management-System (CMS), welches
        ihnen erlaubt, ihre Webseite auch ohne Programmierkenntnisse mit Inhalt
        zu füllen. Darüber hinaus können sie die Inhalte ihrer Webseite
        jederzeit ändern, löschen oder für eine bestimmte Dauer deaktivieren. Im
        Nachfolgenden werden ihnen die Grundkenntnisse von Plone/Volto erklärt,
        und sie werden bereits nach kürzester Zeit ihre ersten Seiten erstellen
        und mit Inhalten füllen können.
      </p> */}
      <h1>Inhaltsverzeichnis</h1>
      <ul class="contents" style={{ listStyle: 'none' }}>
        <li>
          <Link to="/page-2/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Get Started
          </Link>{' '}
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>What's Plone/Volto?</li>
            <li>Logging in</li>
          </ul>
        </li>
        <li>
          {' '}
          <Link
            to="/page-2/"
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
            <li>Seite bearbeiten</li>
            <li>Seite erstellen</li>
          </ul>
        </li>
        <li>
          {' '}
          <Link to="/page-2/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Inline Styles
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>Textformatierung</li>
            <li>Externe Links</li>
            <li>Interne Links</li>
          </ul>
        </li>
        <li>
          {' '}
          <Link to="/page-2/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Bilder hinzufügen
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>Bilder hochladen</li>
            <li>Bilder einbinden</li>
          </ul>
        </li>
        <li>
          {' '}
          <Link to="/page-2/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Übersichtsseiten
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>Übersichtsseiten</li>
            <li>Übersichtsseiten erstellen</li>
          </ul>
        </li>
        <li>
          {' '}
          <Link to="/page-2/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Schlagwörter
          </Link>
          <ul
            style={{
              marginBottom: '20px',
              marginTop: '-5px',
            }}
          >
            <li>Verschlagwortung</li>
            <li>Schlagwörter erstellen</li>
          </ul>
        </li>
        <li style={{ marginBottom: '15px' }}>
          {' '}
          <Link
            to="/page-2/"
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
          <Link to="/page-2/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Mehrsprachige Inhalte
          </Link>
        </li>
        <li>
          {' '}
          <Link to="/page-2/" style={{ fontSize: ' 24px', marginLeft: '20px' }}>
            Anhang/Sonstiges
          </Link>
          <ul>
            <li>Maps-Block</li>
            <li>Video-Block</li>
            <li>Teaser-Grid</li>
            <li>Teaser-Hero</li>
          </ul>
        </li>
      </ul>
      <br></br>
      <Link to="/styles">Styles</Link>
    </sharedStyles>
  </Layout>
)

export default DocsPage
