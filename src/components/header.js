import React from 'react'
import { Link } from 'gatsby'

import Headroom from 'react-headroom';


const Header = ({ siteTitle }) => (
  <Headroom style={{
    background: 'grey',
  }}>
    <Link
      to="/"
      style={{
        color: 'blue',
        textDecoration: 'none',
      }}
    >
      {siteTitle}
    </Link>
  </Headroom>
)

export default Header
