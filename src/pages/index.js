import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import Img from 'gatsby-image'


const IndexPage = (props) => (
  <Layout>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "image.jpg" }) {
      ...fluidImage
    }
  }
`
