import React from "react";
import Fade from "react-reveal/Fade";
import "./hamburgers.css";
import { Link } from 'gatsby'


class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
    // Necessary to make `this` work in the callback
    this.openHamburgerMenu = this.openHamburgerMenu.bind(this);
  }

  openHamburgerMenu() {
    this.setState(prevState => ({
      menuIsOpen: !prevState.menuIsOpen
    }));
  }

  render() {
    return (
      <button
        style={{ margin: 0, padding: 0, height: "42px", float: "right" }}
        onClick={this.openHamburgerMenu}
        className={`hamburger hamburger--spin ${this.state.menuIsOpen &&
          "is-active"}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" style={{ zIndex: 99999 }} />
        </span>
        {this.state.menuIsOpen && (
          <div className={`mobileMenu ${this.state.menuIsOpen && "open"}`}>
            <Fade left cascade
              when={this.state.menuIsOpen}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page-2/">Page 2</Link></li>
              </ul>
            </Fade>
          </div>
        )}
      </button>
    );
  }
}

export default HamburgerMenu;
