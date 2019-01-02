import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'semantic-ui-react';

import Logo from '../images/logo2.svg';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    return (
      <nav>
        <div className={this.state.isOpen ? 'menuOverlay open' : 'menuOverlay'}>
          <ul>
            <li>
              <a href="#">Über uns</a>
            </li>
            <li>
              <a href="#">Arbeiten</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </div>
        <Container className="navigation">
          <Link to="/">
            <img src={Logo} alt="kitconcept GmbH" />
          </Link>
          <a
            href="#"
            className={this.state.isOpen ? 'menu open' : 'menu'}
            onClick={this.toggleMenu}
          >
            <span className="menu-circle" />
            <svg
              className={this.state.isOpen ? 'menuIcon isActive' : 'menuIcon'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g fill="none" fillRule="evenodd" stroke="#979797">
                <path d="M13,26.5 L88,26.5" />
                <path d="M13,50.5 L88,50.5" />
                <path d="M13,50.5 L88,50.5" />
                <path d="M13,74.5 L88,74.5" />
              </g>
            </svg>
          </a>
        </Container>
      </nav>
    );
  }
}

export default Navigation;
