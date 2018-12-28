import React from 'react'
import { Link } from 'gatsby'
import ZoomableImage from '../components/ZoomableImage'
import myimage from '../images/gatsby-icon.png'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <ZoomableImage
      id='myid'
      src={myimage}
      dataOriginal={myimage}
    />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
