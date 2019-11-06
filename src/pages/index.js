import React from 'react'

import { Link, graphql } from 'gatsby'

import Styles from '../pages/styles'
import BigHeader from '../components/bigheader'
import Layout from '../components/layout'
import ImageZoom from 'react-medium-image-zoom'
import Img from 'gatsby-image'

const IndexPage = () => (
  <Layout isFrontpage isIntroduction>
    <h1 style={{ textAlign: 'center', zIndex: '1' }}>Plone CMS</h1>
    <p
      style={{
        marginTop: '10px',
        fontSize: '20px',
        marginBottom: '60px',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      Plone/Volto ist ein sogenanntes Content-Management-System (CMS), welches
      ihnen erlaubt, ihre Webseite auch ohne Programmierkenntnisse mit Inhalt zu
      füllen. Darüber hinaus können sie die Inhalte ihrer Webseite jederzeit
      ändern, löschen oder für eine bestimmte Dauer deaktivieren. Im
      Nachfolgenden werden ihnen die Grundkenntnisse von Plone/Volto erklärt,
      und sie werden bereits nach kürzester Zeit ihre ersten Seiten erstellen
      und mit Inhalten füllen können.
    </p>
    <hr></hr>
    <h2 style={{ maxWidth: '570px' }}>Einführung</h2>
    <p style={{ maxWidth: '570px' }}>
      Plone wurde designed, um Webseiten dynamisch und aktuell halten zu können,
      ohne Programmierkenntnisse zu haben. Jeder hat dadurch die Möglichkeit,
      neue Inhalte hinzuzufügen oder Alte zu editieren. Im Nachfolgenden sind
      die Inhalte der Schulung grob zusammengefasst, sie können diese auch
      überspringen und{' '}
      <a href="./whats-plone">direkt mit der Schulung starten</a>.
    </p>
    <h3 style={{ maxWidth: '570px' }}>Was ist Plone</h3>
    <p style={{ maxWidth: '570px' }}>
      Plone ist ein Content-Management-System (CMS), dessen Oberfläche es dem
      Nutzer erlaubt, Inhalte einer Webseite zu verändern.
    </p>
    <h2 style={{ maxWidth: '570px' }}>Plone Schulung</h2>
    <p style={{ maxWidth: '570px' }}>
      In der <a href="./introduction">Plone Schulung</a> lernen Sie, wie sie
      Plone bedienen und nutzen können. Im Laufe der Schulung werden sie ihre
      Kenntnisse direkt anwenden und schon nach wenigen Minuten ihre ersten
      Inhalte hinzufügen können.
    </p>
    <h3 style={{ maxWidth: '570px' }}>Erste Schritte</h3>
    <p style={{ maxWidth: '570px' }}>
      In <a href="./first-steps">diesem Abschnitt</a> werden sie lernen, wie sie
      Seiten editieren und neue Seiten hinzufügen können.
    </p>
    <div className="frontpageimages">
      <ImageZoom
        image={{
          src: 'frontpage1.png',
          alt: 'edit',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: 'frontpage1.png',
          alt: 'edit',
        }}
      />
    </div>
    <h3 style={{ maxWidth: '570px' }}>Inline Styles</h3>
    <p style={{ maxWidth: '570px' }}>
      Mit <a href="./inline-styles">Inline Styles</a> bietet ihnen Plone die
      Möglichkeit, Textelemente hervorzuheben und zu stylen. Zusätzlich können
      Sie Listen, Links oder Zitate verwenden.
    </p>
    <ImageZoom
      image={{
        src: 'frontpage2.png',
        alt: 'bold',
        className: 'frontpageimage',
      }}
      zoomImage={{
        src: 'frontpage2.png',
        alt: 'bold',
      }}
    />
    <h3 style={{ maxWidth: '570px' }}>Bilder hinzufügen</h3>
    <p style={{ maxWidth: '570px' }}>
      Plone kann Bilder speichern, sie können Bilder aus dem Internet in Plone
      einbinden oder ihre eigenen Bilder hochladen. Wie das geht und welche
      weiteren Möglichkeiten ihnen zum Thema Bilder zur Verfügung stehen,
      erfahren sie{' '}
      <a href="./add-images" style={{ color: 'black' }}>
        {' '}
        hier
      </a>
      .
    </p>
    <ImageZoom
      image={{
        src: 'frontpage3.png',
        alt: 'images',
        className: 'frontpageimage',
      }}
      zoomImage={{
        src: 'frontpage3.png',
        alt: 'images',
      }}
    />
    <h3 style={{ maxWidth: '570px' }}>Übersichtsseiten</h3>
    <p style={{ maxWidth: '570px' }}>
      Übersichtsseiten sind Seiten, die einen Überblick über mehrere Inhalte auf
      einer einzigen Seite zusammenfassen. Wie sie Übersichtsseiten anlegen,
      erfahren Sie in diesem <a href="./composite-pages">Abschnitt</a>.
    </p>
    <ImageZoom
      image={{
        src: 'frontpage4.png',
        alt: 'compositepages',
        className: 'frontpageimage',
      }}
      zoomImage={{
        src: 'frontpage4.png',
        alt: 'compositepages',
      }}
    />
    <h3 style={{ maxWidth: '570px' }}>Schlagwörter</h3>
    <p style={{ maxWidth: '570px' }}>
      Was Schlagwörter sind, wofür sie nützlich sind und wie Sie sie benutzen
      können, erfahren sie im Abschnitt <a href="./tags"> Schlagwörter</a>.
      Schlagwörter sind ein gutes Hilfsmittel, um Inhalte zu kategorisieren.
    </p>
    <h3 style={{ maxWidth: '570px' }}>Nachrichtenseiten erstellen</h3>
    <p style={{ maxWidth: '570px' }}>
      Nachrichtenseiten, die meistens aktuelle Informationen und News enthalten,
      kann man ebenfalls in Plone <a href="./create-news-pages">erstellen</a>.
    </p>
    <h3 style={{ maxWidth: '570px' }}>Anhang/Sonstiges</h3>
    <p style={{ maxWidth: '570px' }}>
      Im letzten Kapitel der Schulung werden Ihnen{' '}
      <a href="./more">zusätzliche Optionen</a> gezeigt, die ihnen helfen, ihre
      Webseite individuell zu gestalten. Zudem finden Sie dort die Möglichkeit,
      andere Webseiten wie Youtube oder GoogleMaps einzubinden.
    </p>
  </Layout>
)

export default IndexPage

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 500) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "image.png" }) {
//       ...fluidImage
//     }
//   }
// `
