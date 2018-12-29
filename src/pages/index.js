import React from 'react'
import { Link } from 'gatsby'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: true }))
    console.log('ENTER');
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: false }))
    console.log('LEAVE')
  }

  render() {
    return <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ height: '100vh' }}>
          <h2>One...</h2>
        </div>
        <div style={{ height: '100vh', background: '#f2f2f2' }}>
          <h2
            className={this.state.stickyNav ? 'animateMe ' : 'toBeAnimated'}
          >
            Two...
          </h2>
          <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
            bottomOffset="100px"
            debug="True" />
        </div>

        <div style={{ height: '100vh' }}>
          <h2>Three...</h2>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
  }
}

export default IndexPage
