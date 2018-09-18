import React from 'react'
import { Link } from 'gatsby'
import { Spring } from 'react-spring'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Spring
      from={{ fontSize: 10, number: 0 }}
      to={{ fontSize: 120, number: 100 }}
    >
      {({ fontSize, number }) => (
        <div style={{ fontSize }}>{number.toFixed(2)}</div>
      )}
    </Spring>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
