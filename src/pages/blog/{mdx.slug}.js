import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <p>My blog post contents will go here (eventually)</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
query ($id:String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
      }
      id
      body
    }
  }
  
`

export default BlogPost;