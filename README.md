# gatsby-starter-kitconcept

## Page Transitions

Install gatsby-plugin-page-transitions:

```
npm install --save gatsby-plugin-page-transitions
```

Add plugin to gatsby-config.js:

```
  plugins: [
    'gatsby-plugin-page-transitions',
    ...
  ]
```

Import PageTransition in src/components/layout.js:

```
import PageTransition from 'gatsby-plugin-page-transitions'
````

Add PageTransition element to src/components/layout.js:

```
<PageTransition
  defaultStyle={{
    transition: 'opacity 250ms ease-in-out',
    opacity: '0',
  }}
  transitionStyles={{
    entering: { opacity: '0' },
    entered: { opacity: '1.0' },
    exiting: { opacity: '0' },
  }}
  transitionTime={500}
>
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
    }}
  >
    {children}
  </div>
</PageTransition>
```
