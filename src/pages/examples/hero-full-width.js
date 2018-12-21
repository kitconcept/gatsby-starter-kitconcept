import React from 'react'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import { Link } from 'gatsby'
import { Placeholder } from '../../images/placeholder.png'

import Layout from '../../components/layout'

const InlineStyle = () => (
  <style>{`
    .grid {
      position: relative;
    }
    .grid:before {
      background-color: #F0F0F0;
      box-shadow: 0px 0px 0px 1px #DDDDDD inset;
      content: '';
      height: calc(100% - 2rem);
      left: 1rem;
      top: 1rem;
      position: absolute;
      width: calc(100% - 2rem);
     }
    .ui.divided.grid:before, .celled.grid:before {
      display: none;
    }
    .ui.aligned .column:after {
      display: none !important;
    }
    .grid .column:not(.row):not(.grid):after {
      background-color: rgba(86, 61, 124, .15);
      box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
      content: '';
      display: block;
      min-height: 50px;
    }
    @media only screen and (max-width: 768px) {
      .stackable.grid:before {
        width: 100%;
        left: 0em;
      }
    }
  `}</style>
)

const HeroImageFullPage = () => (
  <Layout>
    <InlineStyle />
    <Image src="../../images/placeholder.png" fluid />
    <Container>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        magnam amet quam natus ea nam provident quibusdam odio aspernatur? Ad
        ut, voluptates aperiam delectus asperiores a at illo modi totam.
      </p>
    </Container>
  </Layout>
)

export default HeroImageFullPage
