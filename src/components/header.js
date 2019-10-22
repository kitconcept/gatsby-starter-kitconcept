import React from 'react'
import { Link } from 'gatsby'
import PloneLogo from './plone-icon.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#20232a',
      width: '100%',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        height: '60px',
        display: 'flex',
      }}
    >
      <a
        href="/"
        style={{
          backgroundColor: '#20232a',
          display: 'flex',
          height: '60px',
          marginLeft: '20%',
          width: '20%',
          justifyContent: 'center',
        }}
      >
        <img
          src={PloneLogo}
          style={{ width: '30px', marginTop: '0px', marginBottom: '0' }}
        />
        <span
          style={{
            color: '#0095D3',
            marginTop: '17px',
            fontSize: '20px',
            marginLeft: '10px',
            fontWeight: '700',
            textDecoration: 'none',
            backgroundColor: '#20232a',
          }}
        >
          Plone Schulungen
        </span>
      </a>
      <nav style={{ display: 'flex' }}>
        <a
          href=""
          style={{
            display: 'flex',
            backgroundColor: '#20232a',
            color: '#ffffff',
            fontWeight: '300',
            fontSize: '20px',
            paddingLeft: '15px',
            paddingRight: '15px',
            marginTop: '17px',
          }}
        >
          Docs
        </a>
        <a
          href=""
          style={{
            display: 'flex',
            backgroundColor: '#20232a',
            color: '#ffffff',
            fontWeight: '300',
            fontSize: '20px',
            paddingLeft: '15px',
            paddingRight: '15px',
            marginTop: '17px',
          }}
        >
          Tutorials
        </a>
        <a
          href=""
          style={{
            display: 'flex',
            backgroundColor: '#20232a',
            color: '#ffffff',
            fontWeight: '300',
            fontSize: '20px',
            paddingLeft: '15px',
            paddingRight: '15px',
            marginTop: '17px',
          }}
        >
          Trainings
        </a>
        <a
          href=""
          style={{
            display: 'flex',
            backgroundColor: '#20232a',
            color: '#ffffff',
            fontWeight: '300',
            fontSize: '20px',
            paddingLeft: '15px',
            paddingRight: '15px',
            marginTop: '17px',
          }}
        >
          Volto
        </a>
      </nav>
      <div
        style={{
          display: 'flex',
          width: 'auto',
          justifyContent: 'flex-end',
          margin: '0',
          padding: '0',
          marginLeft: '200px',
        }}
      >
        <a
          style={{
            backgroundColor: '#20232a',
            color: 'white',
            fontSize: '14px',
            paddingLeft: '15px',
            paddingRight: '15px',
            marginTop: '20px',
          }}
        >
          v4.0a
        </a>
        <a
          style={{
            backgroundColor: '#20232a',
            color: 'white',
            fontSize: '14px',
            paddingLeft: '15px',
            paddingRight: '15px',
            marginTop: '20px',
          }}
        >
          Languages
        </a>
        <a
          style={{
            backgroundColor: '#20232a',
            color: 'white',
            fontSize: '14px',
            paddingLeft: '15px',
            paddingRight: '15px',
            marginTop: '20px',
          }}
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

export default Header
