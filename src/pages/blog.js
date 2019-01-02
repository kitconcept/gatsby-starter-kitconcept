import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'

const Blog = () => (
  <Layout>
    <div className="slide start">
      <div className="inner">
        <h3>kitconcept</h3>
        <h2>Blog</h2>
      </div>
      <div>
        <AnchorLink href="#first" className="more">
          <span />
        </AnchorLink>
      </div>
    </div>
    <div className="slide" id="first">
      <div className="inner">
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export default Blog
