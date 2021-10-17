import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
{
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage;