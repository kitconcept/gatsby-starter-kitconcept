import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
// import { Link } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

import '../theme/semantic.less';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Wir sind eine Agentur für digitale Technologien. Webseiten, Mobile Apps und Intranet Anwendungen mit React, React Native, Python und Plone.',
            },
            {
              name: 'keywords',
              content:
                'Agentur, Bonn, React, ReactJS, React Native, JavaScript, Angular, AngularJS, Python, Django, Pyramid, Plone',
            },
          ]}
        >
          <html lang="de" />
        </Helmet>
        <Navigation />
        <PageTransition
          defaultStyle={{
            opacity: '0',
          }}
          transitionStyles={{
            entering: {
              opacity: '0',
            },
            entered: {
              opacity: '1.0',
              transition: 'opacity 250ms ease-in-out',
            },
            exiting: {
              opacity: '0',
              transition: 'opacity 250ms ease-in-out',
            },
          }}
          transitionTime={250}
        >
          {children}
        </PageTransition>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
