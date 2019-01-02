import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../../components/layout'

const Ehrenamtsportal = (props) => (
  <Layout>
    <div className="slide start">
      <div className="inner">
        <h3>vhs-ehrenamtsportal.de</h3>
        <h2>VHS-Ehrenamtsportal</h2>
      </div>
      <AnchorLink href="#first" className="more">
        <span />
      </AnchorLink>
    </div>
    <div className="slide clientPresentation" id="first">
      <div className="inner">
        <div className="clientLogo">
          <Img
            fluid={props.data.dvvLogo.childImageSharp.fluid}
          />
        </div>
        <div className="clientDescription">
          Der Deutsche Volkshochschul-Verband e.V. (DVV) ist, mit 16
          VHS-Landesverbänden und mehr als 900 Volkshochschulen, der größte
          Weiterbildungsdachverband in Deutschland.
        </div>
      </div>
    </div>
    <div className="slide" id="first">
      <div className="inner" />
    </div>
    <div className="next">
      <div className="inner">
        <Link to="arbeiten/zeelandia.de">
          <h3>NEXT</h3>
          <h2>Zeelandia</h2>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Ehrenamtsportal


export const clientLogo = graphql`
  fragment clientLogo on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    dvvLogo: file(relativePath: { eq: "dvv-logo.png" }) {
      ...clientLogo
    }
  }
`
