import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import zeelandiaLogo from '../../images/zeelandia-logo.svg'
import Layout from '../../components/layout'

const Zeelandia = props => (
  <Layout>
    <div className="slide start">
      <div className="inner">
        <h3>zeelandia.de</h3>
        <h2>Zeelandia Webseite</h2>
      </div>
      <AnchorLink href="#first" className="more">
        <span />
      </AnchorLink>
    </div>
    <div className="slide clientPresentation" id="first">
      <div className="inner">
        <div className="clientLogo">
          <img src={zeelandiaLogo} alt="Logo Zeelandia GmbH & Co. KG" />
        </div>
        <div className="clientDescription">
          Die Zeelandia GmbH & Co. KG ist ein führender Backzutatenhersteller
          mit Sitz in Frankfurt am Main. Zeelandia entwickelt und vertreibt
          Backmittel und Backgrundstoffen für Brot, Brötchen und Feine
          Backwaren. Kunden sind Handwerks- und Filialbäckereien aller
          Größenordnung sowie Unternehmen mit industrieller Fertigung.
        </div>
      </div>
    </div>
    <div className="slide clientImageNormalWidth">
      <div className="inner">
        <Img fluid={props.data.zeelandiaHeader.childImageSharp.fluid} />
      </div>
    </div>
    <div className="slide clientPresentation" id="second">
      <div className="inner">
        <div className="clientDescription">
          <p>
            Seit mehr als 13 Jahren zählen wir Zeelandia zu unseren Kunden. Der
            letzte Relaunch der Seite lag schon sechs Jahre zurück.
          </p>
          <p>
            Das Web und die verfügbaren Technologien haben sich weiterentwicket,
            genauso wie die Anforderungen und Erwartungen von Kunden und
            Mitarbeitern. Mobile Nutzung der Webseite ist mittlerweile Standard.
            Außendienstmitarbeiter wurden in der Zwischenzeit mit moderenen
            Tablets ausgerüstet um den Kunden auch in Regionen mit schlechter
            Internetanbindung Rezepte und Produkte der Webseite zeigen zu
            können.
          </p>
          <p>
            Zum 90-jährigen Bestehen der Firma und der Umfirmierung zur
            „Zeelandia GmbH & Co. KG“ sollte die bestehende Webseite
            überarbeitet werden.
          </p>
        </div>
      </div>
    </div>
    <div className="slide bg-grey">
      <div className="inner">
        <div className="clientFeatures">
          <h3>Leistungen</h3>
          <ul>
            <li>Plone 5 Content Management System</li>
            <li>Headless Architektur mit Plone REST API</li>
            <li>Modernes User-Interface auf Basis von ReactJS</li>
            <li>Anbindung an bestehende Rezept- und Produktdatenbank</li>
            <li>Rohstoffkostenrechner / ...</li>
            <li>PDF-Download von Rezepten und Produkten</li>
            <li>PDF-Katalog</li>
            <li>
              Login und Registrierung für Kunden mit Freischaltung durch
              Zeelandia Mitarbeiter
            </li>
            <li>Warenkorb-Funktionalität</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="inner">
        <div className="clientDescription">
          <h3>Adaptive User Interfaces</h3>
          <p>
            Die neue Webseite sollte Zeelandia einen neuen frischen Webauftritt
            verschaffen. Von einem responsive Webdesign hin zu einem "adaptiven
            User-Interface" welches für jedes Endgerät, egal ob Tablet beim
            Außendienst, Handy beim Kunden, oder Desktop-Rechner beim
            Mitarbeiter, die bestmögliche Nutzerfreundlichkeit bietet.
          </p>
          <p>
            Außendienst und Kunden sollten in der Lage sein die umfangreichen
            Inhalte der Webseite auch bei schlechter Internetverbindung schnell
            laden zu können.
          </p>
        </div>
      </div>
    </div>
    <div className="slide twoImagesFull">
      <Img
        className="left"
        fluid={props.data.zeelandiaProdukt.childImageSharp.fluid}
      />
      <Img
        className="right"
        fluid={props.data.zeelandiaRezept.childImageSharp.fluid}
      />
    </div>
    <div className="next">
      <div className="inner">
        <Link to="arbeiten/dpg-physik.de">
          <h3>NEXT</h3>
          <h2>Deutsche Physikalische Gesellschaft</h2>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Zeelandia

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment fluidImageHalf on File {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    zeelandiaFull: file(relativePath: { eq: "zeelandia.de-full.png" }) {
      ...fluidImage
    }
    zeelandiaHeader: file(relativePath: { eq: "zeelandia.de-header.png" }) {
      ...fluidImage
    }
    zeelandiaProdukt: file(
      relativePath: { eq: "zeelandia-produkt-jung-sahne-auf.jpg" }
    ) {
      ...fluidImageHalf
    }
    zeelandiaRezept: file(
      relativePath: { eq: "zeelandia-rezept-dinkelvollkorn-jogurtbrot.jpg" }
    ) {
      ...fluidImageHalf
    }
  }
`
