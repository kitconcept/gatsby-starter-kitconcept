# React-medium-image-zoom

Installation:

`yarn add react-medium-image-zoom``

src/pages/index.js:

```
import ImageZoom from 'react-medium-image-zoom'
import picture from '../images/simon-rae-221560-unsplash.jpg'

const IndexPage = () => (
  <Layout>
    ...
    <ImageZoom
      image={{
        src: picture,
        alt: '',
      }}
      zoomImage={{
        src: picture,
        alt: '',
      }}
    />
  </Layout>
)
```
