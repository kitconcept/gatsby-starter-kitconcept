import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../../components/layout'

const Arbeiten = () => (
  <Layout>
    <div className="slide start">
      <div className="inner">
        <h3>kitconcept</h3>
        <h2>Unsere Arbeiten</h2>
      </div>
      <AnchorLink href="#first" className="more">
        <span />
      </AnchorLink>
    </div>
    <div className="slide" id="first">
      <div>
        <Link to="arbeiten/zeelandia.de">Zeelandia</Link>
      </div>
      <div>
        <Link to="arbeiten/vhs-ehrenamtsportal.de">DVV</Link>
      </div>
      <div>
        <Link to="arbeiten/dpg-physik.de">DPG</Link>
      </div>
      <div>
        <Link to="arbeiten/dgkim.de">DGKiM</Link>
      </div>
      <div>
        <Link to="arbeiten/extensions.libreoffice.org">
          LibreOffice Extensions Webseite
        </Link>
      </div>
    </div>
  </Layout>
)

export default Arbeiten
