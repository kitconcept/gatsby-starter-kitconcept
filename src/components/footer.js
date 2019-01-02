import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'semantic-ui-react';

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="inner">
      <div className="contact">...</div>
      <div className="box">
        <h3>Adresse</h3>
        <p>
          kitconcept GmbH
          <br />
          Vorgebirgsstraße 80
          <br />
          53119 Bonn
        </p>
      </div>
      <div className="box">
        <h3>Kontakt</h3>
        <p>
          fon +49 228-286 288 380
          <br />
          fax +49 228-286 288 389
          <br />
          info@kitconcept.com
        </p>
      </div>
      <div className="box">
        <h3>Rechtliches</h3>
        <p>
          Sitz: Bonn / Registergericht: Amtsgericht Bonn
          <br />
          Handelsregister Nummer: HRB 22064 / USt-IdNr.: DE305158391
          <br />
          Geschäftsführer: Timo Stollenwerk
        </p>
      </div>
      <div className="legal">
        <p>Copyright @2018 kitconcept GmbH. Alle Rechte vorbehalten.</p>
        <Link to="datenschutz">Datenschutzrichtlinie</Link>
        <Link to="impressum">Impressum</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
