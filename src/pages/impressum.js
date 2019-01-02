import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'

const Impressum = () => (
  <Layout>
    <div className="slide start">
      <div className="inner">
        <h3>kitconcept GmbH</h3>
        <h2>Impressum</h2>
      </div>
      <div>
        <AnchorLink href="#first" className="more">
          <span />
        </AnchorLink>
      </div>
    </div>
    <div className="slide" id="first">
      <div className="inner">
        <p>
          kitconcept GmbH
          <br />
          Vorgebirgsstraße 80
          <br />
          53119 Bonn
        </p>
        <p>
          www.kitconcept.com
          <br />
          info@kitconcept.com
        </p>
        <p>
          Sitz der Gesellschaft: Bonn
          <br />
          Registergericht der Gesellschaft: Amtsgericht Bonn
          <br />
          Handelsregister Nummer: HRB 22064
          <br />
          USt-IdNr.: DE305158391 Geschäftsführer: Timo Stollenwerk
        </p>
      </div>
    </div>
  </Layout>
)

export default Impressum
