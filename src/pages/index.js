import React from 'react'
import { Link } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring'

import Layout from '../components/layout'

class IndexPage extends React.Component {
  render() {
    return <Layout>
      <div>
        <Parallax pages={2}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ background: 'red' }}>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.25}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
            <h1>Hello Parallax</h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.0}
            speed={0.5}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'blue'
          }}>
            <h1>Second Parallax Block</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </Layout>
  }
}

export default IndexPage
