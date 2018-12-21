import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ExamplesPage = () => (
  <Layout>
    <h1>Examples</h1>
    <ul>
      <li>
        <Link to="examples/hero-full-width">Hero image full width</Link>
      </li>
    </ul>
  </Layout>
)

export default ExamplesPage
