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
      <li>
        <Link to="examples/hero-normal-width">Hero image normal width</Link>
      </li>
      <li>
        <Link to="examples/text-images-block-normal-width">
          Text-blocks and images in normal width
        </Link>
      </li>
      <li>
        <Link to="examples/text-images-block-small-width">
          Text-blocks and images in small width
        </Link>
      </li>
    </ul>
  </Layout>
)

export default ExamplesPage
