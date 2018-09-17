# Scroll Animation

Install react-anchor-link-smooth-scroll via npm:

```
npm install react-anchor-link-smooth-scroll --save
```

Add anchor:

```
import AnchorLink from "react-anchor-link-smooth-scroll";

...

const IndexPage = () => (
  <Layout>
    <AnchorLink href='#anchorOne'>Anchor One</AnchorLink>
    <div id="anchorOne" style={{height: '100vh', background: '#ccc'}}>
      <h1>Anchor One</h1>
    </div>
  </Layout>
)

```