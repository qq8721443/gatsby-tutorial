import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorials.</p>
      <StaticImage
        alt="Canyon in my local"
        src="../images/canyon.jpg"
        width={500}
      />
    </Layout>
  )
}

export default IndexPage;