import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import dpgLogo from '../../images/dpg-logo.svg'
import Layout from '../../components/layout'

const Dpg = () => (
  <Layout>
    <div className="slide start">
      <div className="inner">
        <h3>dpg-physik.de</h3>
        <h2>Deutsche Physikalische Gesellschaft</h2>
      </div>
      <AnchorLink href="#first" className="more">
        <span />
      </AnchorLink>
    </div>
    <div className="slide clientPresentation" id="first">
      <div className="inner">
        <div className="clientLogo">
          <img src={dpgLogo} alt="Deutsche Physikalische Gesellschaft" />
        </div>
        <div className="clientDescription">
          Die Deutsche Physikalische Gesellschaft e. V. (DPG) ist die älteste
          nationale und mit rund 62.000 Mitgliedern größte physikalische
          Fachgesellschaft der Welt.
        </div>
      </div>
    </div>
    <div className="next">
      <div className="inner">
        <Link to="arbeiten/vhs-ehrenamtsportal.de">
          <h3>NEXT</h3>
          <h2>VHS Ehrenamtsportal</h2>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Dpg
