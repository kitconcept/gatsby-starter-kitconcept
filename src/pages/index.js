import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from "react-anchor-link-smooth-scroll";

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <AnchorLink href='#anchorOne'>Anchor One</AnchorLink>
    <AnchorLink href='#anchorTwo'>Anchor Two</AnchorLink>
    <div id="anchorOne" style={{height: '100vh', background: '#ccc'}}>
      <h1>Anchor One</h1>
    </div>
    <div id="anchorTwo" style={{height: '100vh'}}>
      <h1>Anchor Two</h1>
    </div>
  </Layout>
)

export default IndexPage
