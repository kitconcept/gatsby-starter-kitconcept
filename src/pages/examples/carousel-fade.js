import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'gatsby';
import Layout from '../../components/layout'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      className: "center",
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Layout>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div style={{textAlign: 'center'}}>
            <h1>Slide 1</h1>
          </div>
          <div style={{textAlign: 'center'}}>
          <h1>Slide 2</h1>
          </div>
          <div style={{textAlign: 'center'}}>
          <h1>Slide 3</h1>
          </div>
        </Slider>
        <div style={{position: 'relative'}}>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    );
  }
}