import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Semantic UI Gatsby starter</h1>
    <p>
      Those are examples using Semantic UI from the
      https://react.semantic-ui.com site.
    </p>
    <ul>
      <li>
        <Link to="/grid/">Grid</Link>
      </li>
      <li>
        <Link to="/theming/">Theming</Link>
      </li>
      <li>
        <Link to="/responsive/">Responsive</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
