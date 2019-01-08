import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'
import makeCarousel from 'react-reveal/makeCarousel'
import Layout from '../components/layout'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'

const CarouselUI = ({ position, handleClick, children }) => (
  <Container
    onClick={handleClick}
    data-position={position - 1}
    style={{
      width: '100%',
      height: '200px',
      margin: 0,
      padding: 0,
      position: 'relative',
      backgroundColor: '#ede4dc',
    }}
  >
    {children}
  </Container>
)
const Carousel = makeCarousel(CarouselUI)

class FadeCarousel extends React.Component {
  render() {
    return (
      <Layout>
        <Carousel>
          <Fade duration={3000}>
            <div>
              <h1>Slide 1</h1>
              <p>Slide Description</p>
            </div>
          </Fade>
          <Fade delay={1000}>
            <div>
              <h1>Slide 2</h1>
              <p>Slide Description</p>
            </div>
          </Fade>
          <Fade opposite cascade>
            <div>
              <h1>Slide 3</h1>
              <p>Slide Description</p>
            </div>
          </Fade>
        </Carousel>
        <div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    )
  }
}

export default FadeCarousel
