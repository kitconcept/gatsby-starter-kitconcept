import React from 'react'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

const HeroImageFullPage = props => (
  <Layout>
    <Container>
      <Container style={{ width: '800px', maxWidth: '100%' }}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          libero nesciunt maiores numquam earum harum culpa facilis ea sed eaque
          qui corporis quaerat, temporibus quisquam a provident repellat
          perferendis placeat.
        </p>
        <Divider />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Img fluid={props.data.placeholderImage.childImageSharp.fluid} />
            </Grid.Column>
            <Grid.Column>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                odit error ipsam deleniti? Rem consectetur consequuntur, itaque
                velit quaerat, expedita repudiandae quasi nihil reiciendis earum
                nisi eaque. Alias, cum expedita.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                odit error ipsam deleniti? Rem consectetur consequuntur, itaque
                velit quaerat, expedita repudiandae quasi nihil reiciendis earum
                nisi eaque. Alias, cum expedita.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Img fluid={props.data.placeholderImage.childImageSharp.fluid} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
