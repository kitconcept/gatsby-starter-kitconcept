import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const NewsSection = props => (
  <section className="slide news">
    <div className="inner">
      <h2 class="line">Nachrichten</h2>
      <div class="left">
        <Fade bottom>
          <Link to="nachrichten">
            <div className="imageCaption">
              <h3>Zeelandia Website Relaunch</h3>
            </div>
          </Link>
        </Fade>
      </div>
      <div class="center" />
      <div class="right" />
    </div>
  </section>
)

export default NewsSection
