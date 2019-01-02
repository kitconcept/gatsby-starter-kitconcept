import React from 'react'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

const HeroImageFullPage = props => (
  <Layout>
    <Img fluid={props.data.placeholderImage.childImageSharp.fluid} />
    <Container>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        magnam amet quam natus ea nam provident quibusdam odio aspernatur? Ad
        ut, voluptates aperiam delectus asperiores a at illo modi totam.
      </p>
      <Container style={{ width: '800px', maxWidth: '100%' }}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          libero nesciunt maiores numquam earum harum culpa facilis ea sed eaque
          qui corporis quaerat, temporibus quisquam a provident repellat
          perferendis placeat.
        </p>
      </Container>
    </Container>
  </Layout>
)

export default HeroImageFullPage

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
