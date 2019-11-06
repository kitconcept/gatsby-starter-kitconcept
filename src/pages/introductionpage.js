import React from 'react'
import { Link } from 'gatsby'
import Styles from '../pages/styles'
import BigHeader from '../components/bigheader'
import Layout from '../components/layout'
import ImageZoom from 'react-medium-image-zoom'

const IntroductionPage = () => (
  <Layout isIntroduction>
    <h1>Einführung</h1>
    <p class="headerdescription">
      Diese Seite dient als Übersicht für Plone und die Plone Schulung.
    </p>
    <h2>Einführung</h2>
    <p>
      Plone wurde designed, um Webseiten dynamisch und aktuell halten zu können,
      ohne Programmierkenntnisse zu haben. Jeder hat dadurch die Möglichkeit,
      neue Inhalte hinzuzufügen oder Alte zu editieren. Im Nachfolgenden sind
      die Inhalte der Schulung grob zusammengefasst, sie können diese auch
      überspringen und{' '}
      <a href="./whats-plone">direkt mit der Schulung starten</a>.
    </p>
    <h3>Was ist Plone</h3>
    <p>
      Plone ist ein Content-Management-System (CMS), dessen Oberfläche es dem
      Nutzer erlaubt, Inhalte einer Webseite zu verändern.
    </p>
    <h2>Plone Schulung</h2>
    <p>
      In der <a href="./introduction">Plone Schulung</a> lernen Sie, wie sie
      Plone bedienen und nutzen können. Im Laufe der Schulung werden sie ihre
      Kenntnisse direkt anwenden und schon nach wenigen Minuten ihre ersten
      Inhalte hinzufügen können.
    </p>
    <h3>Erste Schritte</h3>
    <p>
      In <a href="./first-steps">diesem Abschnitt</a> werden sie lernen, wie sie
      Seiten editieren und neue Seiten hinzufügen können.
    </p>
    <img src="markdown-pages/edittedpage.png"></img>
    <h3>Inline Styles</h3>
    <p>
      Mit <a href="./inline-styles">Inline Styles</a> bietet ihnen Plone die
      Möglichkeit, Textelemente hervorzuheben und zu stylen. Zusätzlich können
      Sie Listen, Links oder Zitate verwenden.
    </p>
    <h3>Bilder hinzufügen</h3>
    <p>
      Plone kann Bilder speichern, sie können Bilder aus dem Internet in Plone
      einbinden oder ihre eigenen Bilder hochladen. Wie das geht und welche
      weieteren Möglichkeiten ihnen zum Thema Bilder zur Verfügung stehen,
      erfahren sie{' '}
      <a href="./add-images" style={{ color: 'black' }}>
        {' '}
        hier
      </a>
      .
    </p>
    <h3>Übersichtsseiten</h3>
    <p>
      Übersichtsseiten sind Seiten, die einen Überblick über mehrere Inhalte auf
      einer einzigen Seite zusammenfassen. Wie sie Übersichtsseiten anlegen,
      erfahren Sie in diesem <a href="./composite-pages">Abschnitt</a>.
    </p>
    <h3>Schlagwörter</h3>
    <p>
      Was Schlagwörter sind, wofür sie nützlich sind und wie Sie sie benutzen
      können, erfahren sie im Abschnitt <a href="./tags"> Schlagwörter</a>.
      Schlagwörter sind ein gutes Hilfsmittel, um Inhalte zu kategorisieren.
    </p>
    <h3>Nachrichtenseiten erstellen</h3>
    <p>
      Nachrichtenseiten, die meistens aktuelle Informationen und News enthalten,
      kann man ebenfalls in Plone <a href="./create-news-pages">erstellen</a>.
    </p>
    <h3>Anhang/Sonstiges</h3>
    <p>
      Im letzten Kapitel der Schulung werden Ihnen{' '}
      <a href="./more">zusätzliche Optionen</a> gezeigt, die ihnen helfen, ihre
      Webseite individuell zu gestalten. Zudem finden Sie dort die Möglichkeit,
      andere Webseiten wie Youtube oder GoogleMaps einzubinden.
    </p>
  </Layout>
)

export default IntroductionPage
