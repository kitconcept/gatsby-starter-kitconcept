import React from 'react'

import { Link, graphql } from 'gatsby'

import Styles from '../pages/styles'
import BigHeader from '../components/bigheader'
import Layout from '../components/layout'
import ImageZoom from 'react-medium-image-zoom'
import Img from 'gatsby-image'
import frontpage1 from '../pages/frontpage1.png'
import frontpage2 from '../pages/frontpage2.png'
import frontpage3 from '../pages/frontpage3.png'
import frontpage4 from '../pages/frontpage4.png'
import frontpage5 from '../pages/frontpage5.png'
import frontpage6 from '../pages/frontpage6.png'
import frontpage7 from '../pages/frontpage7.png'

const IndexPage = () => (
  <Layout isFrontpage isIntroduction>
    <h1 style={{ textAlign: 'left', zIndex: '1' }}>Plone CMS</h1>
    <p
      style={{
        marginTop: '10px',
        fontSize: '20px',
        marginBottom: '60px',
        // marginRight: 'auto',
        // marginLeft: 'auto',
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
    <div
      style={{
        display: 'flex',
        marginBottom: '50px',
        maxWidth: '1220px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '50px',
      }}
    >
      <div style={{ display: 'block', maxWidth: '370px' }}>
        <h3
          style={{
            textAlign: 'left',
            verticalAlign: 'top',
            maxWidth: '370px',
            display: 'inline-block',
            paddingTop: '0',
            marginTop: '0',
          }}
        >
          Einführung
        </h3>
        <p
          style={{
            textAlign: 'left',
            fontSize: '17px',
            maxWidth: '370px',
            display: 'inline-block',
          }}
        >
          Plone wurde designed, um Webseiten dynamisch und aktuell halten zu
          können, ohne Programmierkenntnisse zu haben. Jeder hat dadurch die
          Möglichkeit, neue Inhalte hinzuzufügen oder Alte zu editieren.
          <br></br>
          <br></br> Im Nachfolgenden sind die Inhalte der Schulung grob
          zusammengefasst, sie können diese auch überspringen und{' '}
          <a href="./whats-plone">direkt mit der Schulung starten</a>.
        </p>
      </div>
      <div style={{ display: 'block', maxWidth: '370px' }}>
        <h3
          style={{
            textAlign: 'left',
            verticalAlign: 'top',
            maxWidth: '370px',
            display: 'inline-block',
            paddingTop: '0',
            marginTop: '0',
          }}
        >
          Was ist Plone
        </h3>
        <p
          style={{
            textAlign: 'left',
            fontSize: '17px',
            maxWidth: '370px',
            display: 'inline-block',
          }}
        >
          Plone ist ein Content-Management-System (CMS), dessen Oberfläche es
          dem Nutzer erlaubt, Inhalte einer Webseite zu verändern. Um das zu
          erreichen, stehen dem Nutzer verschiedene Möglichkeiten und Werkzeuge
          zur Verfügung, Plone bleibt dabei aber leicht bedienbar und sicher.{' '}
          <br></br>
          <br></br>
          Welche Möglichkeiten mit Plone genau zur Verfügung stehen, erfahren
          sie in unsere <a href="/introduction">Schulung</a>.
        </p>
      </div>
      <div style={{ display: 'block', maxWidth: '370px' }}>
        <h3
          style={{
            textAlign: 'left',
            verticalAlign: 'top',
            maxWidth: '370px',
            display: 'inline-block',
            paddingTop: '0',
            marginTop: '0',
          }}
        >
          Plone Schulung
        </h3>
        <p
          style={{
            textAlign: 'left',
            fontSize: '17px',
            maxWidth: '370px',
            display: 'inline-block',
          }}
        >
          In der <a href="./introduction">Plone Schulung</a> lernen Sie, wie sie
          Plone bedienen und nutzen können. Im Laufe der Schulung werden sie
          ihre Kenntnisse direkt anwenden und schon nach wenigen Minuten ihre
          ersten Inhalte hinzufügen können.
          <br></br>
          <br></br>
          Für eine ausführlichere Dokumentation oder weitere Informationen
          besuchen Sie gerne die offizielle&nbsp;
          <a href="https://www.plone.org" style={{ color: 'black' }}>
            Plone Webseite
          </a>
          .
        </p>
      </div>
    </div>
    <hr></hr>

    {/* <h3 style={{ maxWidth: '570px', display: 'block' }}>Erste Schritte</h3> */}
    <div
      className="frontpageimages"
      style={{ display: 'block', maxWidth: '1220px', marginTop: '75px' }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: '570px',
          verticalAlign: 'top',
        }}
      >
        <h3
          style={{
            maxWidth: '570px',
            width: '570px',
            display: 'inline-block',
            paddingTop: '0',
            position: 'relative',
            verticalAlign: 'top',
            marginTop: '0',
          }}
        >
          Erste Schritte
        </h3>
        <p
          style={{
            maxWidth: '570px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          In <a href="./first-steps">diesem Abschnitt</a> werden sie lernen, wie
          sie Seiten editieren und neue Seiten hinzufügen können.
        </p>
      </div>
      <ImageZoom
        image={{
          src: frontpage1,
          alt: 'edit',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: frontpage1,
          alt: 'edit',
        }}
      />
    </div>

    <div
      className="frontpageimages"
      style={{ display: 'block', maxWidth: '1220px', marginTop: '75px' }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: '570px',
          verticalAlign: 'top',
        }}
      >
        <h3
          style={{
            maxWidth: '570px',
            width: '570px',
            display: 'inline-block',
            paddingTop: '0',
            position: 'relative',
            verticalAlign: 'top',
            marginTop: '0',
          }}
        >
          Inline Styles
        </h3>
        <p
          style={{
            maxWidth: '570px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          Mit <a href="./inline-styles">Inline Styles</a> bietet ihnen Plone die
          Möglichkeit, Textelemente hervorzuheben und zu stylen. Zusätzlich
          können Sie Listen, Links oder Zitate verwenden.
        </p>
      </div>
      <ImageZoom
        image={{
          src: frontpage2,
          alt: 'bold',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: frontpage2,
          alt: 'bold',
        }}
      />
    </div>

    <div
      className="frontpageimages"
      style={{ display: 'block', maxWidth: '1220px', marginTop: '75px' }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: '570px',
          verticalAlign: 'top',
        }}
      >
        <h3
          style={{
            maxWidth: '570px',
            width: '570px',
            display: 'inline-block',
            paddingTop: '0',
            position: 'relative',
            verticalAlign: 'top',
            marginTop: '0',
          }}
        >
          Bilder hinzufügen
        </h3>
        <p
          style={{
            maxWidth: '570px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          Plone kann Bilder speichern, sie können Bilder aus dem Internet in
          Plone einbinden oder ihre eigenen Bilder hochladen. Wie das geht und
          welche weiteren Möglichkeiten ihnen zum Thema Bilder zur Verfügung
          stehen, erfahren sie{' '}
          <a href="./add-images" style={{ color: 'black' }}>
            {' '}
            hier
          </a>
          .
        </p>
      </div>
      <ImageZoom
        image={{
          src: frontpage3,
          alt: 'images',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: frontpage3,
          alt: 'images',
        }}
      />
    </div>

    <div
      className="frontpageimages"
      style={{ display: 'block', maxWidth: '1220px', marginTop: '75px' }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: '570px',
          verticalAlign: 'top',
        }}
      >
        <h3
          style={{
            maxWidth: '570px',
            width: '570px',
            display: 'inline-block',
            paddingTop: '0',
            position: 'relative',
            verticalAlign: 'top',
            marginTop: '0',
          }}
        >
          Übersichtsseiten
        </h3>
        <p
          style={{
            maxWidth: '570px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          Übersichtsseiten sind Seiten, die einen Überblick über mehrere Inhalte
          auf einer einzigen Seite zusammenfassen. Wie sie Übersichtsseiten
          anlegen, erfahren Sie in diesem{' '}
          <a href="./composite-pages">Abschnitt</a>.
        </p>
      </div>
      <ImageZoom
        image={{
          src: frontpage4,
          alt: 'compositepages',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: frontpage4,
          alt: 'compositepages',
        }}
      />
    </div>
    <div
      className="frontpageimages"
      style={{ display: 'block', maxWidth: '1220px', marginTop: '75px' }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: '570px',
          verticalAlign: 'top',
        }}
      >
        <h3
          style={{
            maxWidth: '570px',
            width: '570px',
            display: 'inline-block',
            paddingTop: '0',
            position: 'relative',
            verticalAlign: 'top',
            marginTop: '0',
          }}
        >
          Schlagwörter
        </h3>
        <p
          style={{
            maxWidth: '570px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          Was Schlagwörter sind, wofür sie nützlich sind und wie Sie sie
          benutzen können, erfahren sie im Abschnitt{' '}
          <a href="./tags"> Schlagwörter</a>. Schlagwörter sind ein gutes
          Hilfsmittel, um Inhalte zu kategorisieren.
        </p>
      </div>
      <ImageZoom
        image={{
          src: frontpage5,
          alt: 'tags',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: frontpage5,
          alt: 'tags',
        }}
      />
    </div>
    <div
      className="frontpageimages"
      style={{ display: 'block', maxWidth: '1220px', marginTop: '75px' }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: '570px',
          verticalAlign: 'top',
        }}
      >
        <h3
          style={{
            maxWidth: '570px',
            width: '570px',
            display: 'inline-block',
            paddingTop: '0',
            position: 'relative',
            verticalAlign: 'top',
            marginTop: '0',
          }}
        >
          Nachrichtenseiten erstellen
        </h3>
        <p
          style={{
            maxWidth: '570px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          Nachrichtenseiten, die meistens aktuelle Informationen und News
          enthalten, kann man ebenfalls in Plone{' '}
          <a href="./create-news-pages">erstellen</a>.
        </p>
      </div>
      <ImageZoom
        image={{
          src: frontpage6,
          alt: 'newspage',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: frontpage6,
          alt: 'newspages',
        }}
      />
    </div>
    <div
      className="frontpageimages"
      style={{ display: 'block', maxWidth: '1220px', marginTop: '75px' }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: '570px',
          verticalAlign: 'top',
        }}
      >
        <h3
          style={{
            maxWidth: '570px',
            width: '570px',
            display: 'inline-block',
            paddingTop: '0',
            position: 'relative',
            verticalAlign: 'top',
            marginTop: '0',
          }}
        >
          Anhang/Sonstiges
        </h3>
        <p
          style={{
            maxWidth: '570px',
            display: 'inline-block',
            verticalAlign: 'top',
          }}
        >
          Im letzten Kapitel der Schulung werden Ihnen{' '}
          <a href="./more">zusätzliche Optionen</a> gezeigt, die ihnen helfen,
          ihre Webseite individuell zu gestalten. Zudem finden Sie dort die
          Möglichkeit, andere Webseiten wie Youtube oder GoogleMaps einzubinden.
        </p>
      </div>
      <ImageZoom
        image={{
          src: frontpage7,
          alt: 'more',
          className: 'frontpageimage',
        }}
        zoomImage={{
          src: frontpage7,
          alt: 'more',
        }}
      />
    </div>
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
