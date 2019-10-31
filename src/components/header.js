import React from 'react'
import { Link } from 'gatsby'
import PloneLogo from './plone-icon.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#20232a',
      width: '100%',
      position: 'fixed',
      zIndex: '5',
      top: '0',
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
          marginLeft: '14%',
          width: '20%',
          justifyContent: 'center',
        }}
      >
        <img
          src={PloneLogo}
          style={{ width: '30px', marginTop: '4px', marginBottom: '0' }}
        />
        <span
          style={{
            color: '#0095D3',
            marginTop: '21px',
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
          href="/docs"
          style={{
            display: 'flex',
            backgroundColor: '#20232a',
            color: '#ffffff',
            fontWeight: '300',
            fontSize: '18px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '21px',
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
            fontSize: '18px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '21px',
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
            fontSize: '18px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '21px',
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
            fontSize: '18px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '21px',
          }}
        >
          Volto
        </a>
      </nav>
      <form type={{ display: 'flex' }}>
        <span
          style={{
            paddingTop: '20px',
            display: 'inline-block',
            paddingLeft: '20px',
            width: '200px',
          }}
        >
          <input
            type="search"
            placeholder="&#128269; Suche"
            style={{ marginLeft: '10px', fontSize: '17px' }}
          ></input>
        </span>
      </form>
      <div
        style={{
          display: 'flex',
          width: 'auto',
          justifyContent: 'flex-start',
          margin: '0',
          padding: '0',
          marginLeft: '100px',
        }}
      >
        <a
          href=""
          style={{
            backgroundColor: '#20232a',
            color: 'white',
            fontSize: '14px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '24px',
          }}
        >
          v4.0a
        </a>
        <a
          href=""
          style={{
            backgroundColor: '#20232a',
            color: 'white',
            fontSize: '14px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '24px',
          }}
        >
          Languages
        </a>
        <a
          href=""
          style={{
            backgroundColor: '#20232a',
            color: 'white',
            fontSize: '14px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '24px',
          }}
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

export default Header
