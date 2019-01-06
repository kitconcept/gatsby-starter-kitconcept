import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby'
import makeCarousel from 'react-reveal/makeCarousel';
import Layout from '../components/layout'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

class FadeCarousel extends React.Component{
render ()
{
  return(
    <Carousel defaultWait={100000} /*wait for 1000 milliseconds*/ >
    <Fade right>
      <div>
        <h1>Slide 1</h1>
        <p>Slide Description</p>
      </div>
    </Fade>
    <Fade right>
      <div>
        <h1>Slide 2</h1>
        <p>Slide Description</p>
      </div>
    </Fade>
  </Carousel>

  );
}
}

export default FadeCarousel;