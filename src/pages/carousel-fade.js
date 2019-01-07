import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby'
import makeCarousel from 'react-reveal/makeCarousel';
import Layout from '../components/layout'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'

const CarouselUI = ({ position, handleClick, children }) => (
  <Container onClick={handleClick} data-position={position - 1} style={{ width: 'auto', height: '200px', position: 'relative', left: 'auto', right: 'auto' , backgroundColor: '#ede4dc'}}>
     {children}
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

class FadeCarousel extends React.Component{
render ()
{
  return(
    <Layout>
    <Carousel>
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
    <Fade right>
      <div>
        <h1>Slide 3</h1>
        <p>Slide Description</p>
      </div>
    </Fade>
  </Carousel>
  </Layout>
  );
}
}

export default FadeCarousel;