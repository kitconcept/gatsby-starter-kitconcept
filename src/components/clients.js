import React from 'react'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

import LogoIZA from '../images/kunden_logo-IZA.svg'
import LogoZeelandia from '../images/kunden_logo-Zeelandia.svg'
import LogoErelation from '../images/kunden_logo-e-relation.svg'
import LogoDPG from '../images/kunden_logo-DPG.svg'
import LogoFreitag from '../images/kunden_logo-Freitag.svg'
import LogoDIE from '../images/kunden_logo-DIE.svg'
import LogoTDF from '../images/kunden_logo-Document-Foundation.svg'
import LogoUPC from '../images/kunden_logo-UPC.svg'
import LogoBION from '../images/kunden_logo-BION.svg'
import LogoUniBonn from '../images/kunden_logo-Uni-Bonn.svg'
import LogoUKBonn from '../images/kunden_logo-Uniklinik-Bonn.svg'
import LogoDVV from '../images/kunden_logo-DVV.svg'
import LogoDGKiM from '../images/kunden_logo-DGKIM.svg'
import LogoHUBerlin from '../images/kunden_logo-HUBerlin.svg'
import LogoFZJ from '../images/kunden_logo-FZJ.svg'
import LogoBRH from '../images/kunden_logo-BRH.svg'

const ClientsSection = () => (
  <section className="slide clients">
    <div className="inner">
      <h2>Unsere Kunden</h2>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoIZA}
            style={{ width: '70%', paddingTop: '20px' }}
            alt="Institut Zur Zukunft der Arbeit"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoZeelandia}
            style={{ width: '50%' }}
            alt="Zeelandia GmbH & Co KG"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img src={LogoErelation} alt="Erelation AG" />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoDPG}
            style={{ width: '60%' }}
            alt="Deutsche Physikalische Gesellschaft"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoDIE}
            style={{ width: '50%' }}
            alt="Deutsches Insitut für Erwachsenenbildung"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoUPC}
            style={{ width: '35%' }}
            alt="Universitat Politècnica de Catalunya"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoHUBerlin}
            style={{ width: '35%' }}
            alt="Humboldt-Universität zu Berlin"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoBION}
            style={{ width: '40%' }}
            alt="Biodiversitätsnetzwerk Bonn"
          />
        </Fade>
      </div>
      {/* <img
        class="is__png"
        src="kunden_logo-VNC.png"
        alt="Virtual Network Consult"
      /> */}
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoFreitag}
            style={{ paddingTop: '32px' }}
            alt="Der Freitag"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img src={LogoUniBonn} alt="Universität Bonn" />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img src={LogoUKBonn} alt="Universitäts Klinikum Bonn" />
        </Fade>
      </div>

      <div className="logo">
        <Fade bottom>
          <img
            src={LogoFZJ}
            style={{ paddingTop: '30px' }}
            alt="Forschungszentrum Jülich"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoDVV}
            style={{ width: '100%' }}
            alt="Deutscher Volkshochschul-Verband"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoTDF}
            style={{ width: '100%' }}
            alt="The Document Foundation"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoDGKiM}
            style={{ width: '100%' }}
            alt="Deutsche Gesellschaft für Kinderschutz in der Medizin"
          />
        </Fade>
      </div>
      <div className="logo">
        <Fade bottom>
          <img
            src={LogoBRH}
            style={{ width: '80%' }}
            alt="Bundesrechnungshof"
          />
        </Fade>
      </div>
      {/* <img
        class="is__png"
        src="kunden_l
        ogo-LSH.png"
        alt="Laurens Spethmann Holding AG &amp; Co. KG"
      />
      <img
        class="is__png"
        style="width: 50%"
        src="kunden_logo-OTG.png"
        alt="Ostfriesische Tee Gesellschaft GmbH &amp; Co. KG"
      />
      <img class="is__png" src="kunden_logo-GNE.png" alt="Grupo Nova Energia" /> */}
    </div>
  </section>
)

export default ClientsSection
