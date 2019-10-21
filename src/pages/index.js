import React from 'react'
import { Link } from 'gatsby'
import sharedStyles from '../pages/theme'
import Styles from '../pages/styles'

import Layout from '../components/layout'

const IndexPage = () => (
  <sharedStyles>
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <br></br>
      <Link to="/styles">Styles</Link>
    </Layout>
  </sharedStyles>
)

export default IndexPage
