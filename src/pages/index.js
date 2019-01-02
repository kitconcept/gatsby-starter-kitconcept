import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Parallax from 'react-rellax'
import Waypoint from 'react-waypoint'
import Fade from 'react-reveal/Fade'

import ClientsSection from '../components/clients'
// import NewsSection from '../components/news'
import Layout from '../components/layout'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      animateAbout: false,
      animateWork: false,
    }
  }

  animateStartSlide = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  unanimateStartSlide = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  animateAbout = () => {
    this.setState(() => ({ animateAbout: true }))
  }

  unanimateAbout = () => {
    this.setState(() => ({ animateAbout: false }))
  }

  animateWork = () => {
    this.setState(() => ({ animateWork: true }))
    console.log('animateWork')
  }

  unanimateWork = () => {
    this.setState(() => ({ animateWork: false }))
    console.log('unanimateWork')
  }

  render() {
    return (
      <Layout>
        <div
          className={
            this.state.stickyNav
              ? 'slide start animateMe '
              : 'slide start toBeAnimated'
          }
        >
          <div className="inner">
            <Parallax data-rellax-speed="-2.5">
              <h3>Hallo, wir sind kitconcept,</h3>
              <h2>Agentur für digitale Technologien</h2>
            </Parallax>
          </div>
          <AnchorLink href="#about" className="more">
            <span />
          </AnchorLink>
        </div>
        <Waypoint
          onEnter={this.animateStartSlide}
          onLeave={this.unanimateStartSlide}
          bottomOffset="100px"
        />

        <div
          className={
            this.state.animateAbout
              ? 'about animateAbout '
              : 'about unanimateAbout'
          }
          id="about"
        >
          <div className="inner">
            <h3>kitconcept ist eine Agentur für Web- und Mobiltechnologie</h3>
            <p className="text">
              Wir konzipieren, designen und entwickeln Webseiten,
              Web-Anwendungen,
              <br />
              Intranet-Lösungen und mobile Apps für öffentliche Auftraggeber und
              Firmen.
            </p>
            <Link to="ueber-uns">
              <button>Mehr über uns</button>
            </Link>
          </div>
        </div>
        <Waypoint
          onEnter={this.animateAbout}
          onLeave={this.unanimateAbout}
          bottomOffset="0px"
        />

        <Waypoint onEnter={this.animateWork} />
        <div className="slide work">
          <div className="inner">
            <h2>Unsere Arbeiten</h2>
            <div
              className={
                this.state.animateWork ? 'animateWork' : 'unanimateWork'
              }
            >
              <div className="left">
                <Link to="arbeiten/zeelandia.de">
                  <Img
                    fluid={this.props.data.zeelandiaImage.childImageSharp.fluid}
                    title="Zeelandia"
                  />
                  <div className="imageCaption">
                    <h3>Zeelandia</h3>
                    <h4>Website Relaunch</h4>
                  </div>
                </Link>
              </div>
              <div className="right">
                <div className="item">
                  <Link to="arbeiten/vhs-ehrenamtsportal.de">
                    <Img
                      fluid={this.props.data.dvvImage.childImageSharp.fluid}
                      title="Deutscher Volkshochschulverband"
                    />
                    <div className="imageCaption">
                      <h3>Deutscher Volkshochschulverband</h3>
                      <h4>VHS-Ehrenamtsportal</h4>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link to="arbeiten/dpg-physik.de">
                    <Img
                      fluid={this.props.data.dpgImage.childImageSharp.fluid}
                      title="Deutsche Physikalische gesellschaft"
                    />
                    <div className="imageCaption">
                      <h3>Deutsche Physikalische Gesellschaft</h3>
                      <h4>Website Relaunch</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link className="more" to="arbeiten">
              <button>Alle unsere Arbeiten</button>
            </Link>
          </div>
        </div>
        <ClientsSection />
        <section className="slide news">
          <div className="inner">
            <h2 className="line">Nachrichten</h2>
            <div className="left">
              <Fade bottom>
                <Link to="nachrichten">
                  <Img
                    fluid={this.props.data.newsImageOne.childImageSharp.fluid}
                    title="Zeelandia"
                  />
                  <div className="imageCaption">
                    <h3>DPG Webseite Relaunch</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="center">
              <Fade bottom>
                <Link to="nachrichten">
                  <Img
                    fluid={this.props.data.newsImageTwo.childImageSharp.fluid}
                    title="Zeelandia"
                  />
                  <div className="imageCaption">
                    <h3>Keynote auf Plone Tagung 2019</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <div className="right">
              <Fade bottom>
                <Link to="nachrichten">
                  <Img
                    fluid={this.props.data.newsImageThree.childImageSharp.fluid}
                    title="Zeelandia"
                  />
                  <div className="imageCaption">
                    <h3>Zeelandia Website Relaunch</h3>
                  </div>
                </Link>
              </Fade>
            </div>
            <Link className="more" to="news">
              <button>Alle Nachrichten</button>
            </Link>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const bannerImage = graphql`
  fragment bannerImage on File {
    childImageSharp {
      fluid(maxWidth: 480, maxHeight: 660) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 480, maxHeight: 320) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const newsImage = graphql`
  fragment newsImage on File {
    childImageSharp {
      fluid(maxWidth: 294, maxHeight: 392) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    zeelandiaImage: file(
      relativePath: { eq: "zeelandia-produkt-jung-sahne-auf.jpg" }
    ) {
      ...bannerImage
    }
    dpgImage: file(relativePath: { eq: "dpg.jpg" }) {
      ...squareImage
    }
    dvvImage: file(relativePath: { eq: "dvv.jpg" }) {
      ...squareImage
    }
    newsImageOne: file(relativePath: { eq: "dpg.jpg" }) {
      ...newsImage
    }
    newsImageTwo: file(
      relativePath: { eq: "news-keynote-plone-tagung-2019.jpg" }
    ) {
      ...newsImage
    }
    newsImageThree: file(
      relativePath: { eq: "zeelandia-produkt-jung-sahne-auf.jpg" }
    ) {
      ...newsImage
    }
  }
`
