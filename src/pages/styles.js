import React from 'react'
import { Link } from 'gatsby'
import sharedStyles from '../pages/theme'

import Layout from '../components/layout'
import { italic } from 'ansi-colors'

const Styles = () => (
  <Layout>
    <h1>Headline 1</h1>
    <p class="headerdescription">
      Die ist eine Beschreibung unter der Headline.
    </p>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>
    <p>
      Das ist ein Text-Element,indem wir dann noch einen{' '}
      <strong>fett geschriebenen Teil einbauen.</strong> Und dann wieder normal.
    </p>
    <hr></hr>
    <ul>
      Das ist eine ungeordnete Liste
      <li>Das ist ein Listen-Item</li>
      <li>Das ist noch ein Listen-Item</li>
      <li>Noch eins</li>
      <li>Noch mehr</li>
    </ul>
    <hr></hr>
    <p class="testfont">Hier testen wir die Schriftart und Größe.</p>
    <strong>Fett geschrieben</strong>
    <br></br>
    <i>Italic</i>
    <br></br>
    <p>
      Das hier ist ein p-Element indem{' '}
      <a href="kitconcept.com">ein a-Element</a> verlinkt wird.
    </p>
    <br></br>
    <ol>
      Das ist eine georndete Liste
      <li>Erster Listenitem</li>
      <li>Zweites Listenitem</li>
      <li>Usw.</li>
    </ol>
    <br></br>
    <blockquote>Das ist ein Blockquote (z.B. Tip: Lorem ipsum usw.)</blockquote>
    <br></br>
    <p>
      Das hier ist ein Code-Text:
      <code class="gatsby-code-text">setState()</code>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Styles
