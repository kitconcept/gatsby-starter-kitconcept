import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const BigHeader = () => (
  <div
    class="bigheader"
    style={{
      display: 'block',
      width: '100%',
      backgroundColor: '#282c34',
      height: '420px',
    }}
  ></div>
)

export default BigHeader
