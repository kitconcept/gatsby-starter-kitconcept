import React from 'react'
import { Link } from 'gatsby'
import PloneLogo from './plone-icon.svg'
import SearchLogo from './search.svg'

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
          class="menupoints"
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
          class="menupoints"
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
          class="menupoints"
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
          class="menupoints"
          href="/introduction"
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
      <form
        type={{
          display: 'flex',
          width: 'auto',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            paddingTop: '18px',
            paddingLeft: '300px',
            position: 'relative',
          }}
        >
          <input
            class="inputsearch"
            type="search"
            placeholder="Suche"
            style={{
              position: 'relative',
              fontSize: '18px',
              fontWeight: '300',
              backgroundColor: '#20232a',
              padding: '0.25rem',
              paddingLeft: '29px',
              borderRadius: '3px',
              border: 'none',
              color: '#ffffff',
              backgroundImage: 'url(https://reactjs.org/search.svg)',
              backgroundSize: '16px 16px',
              backgroundPositionY: 'center',
              backgroundPositionX: '4px',
              backgroundRepeat: 'no-repeat',
              outline: 'none',
            }}
          ></input>
        </span>
      </form>
      <div
        style={{
          // display: 'flex',
          display: 'none',
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
