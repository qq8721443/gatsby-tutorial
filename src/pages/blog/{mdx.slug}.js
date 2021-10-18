import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <p>Date: {data.mdx.date}</p>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}>
            </GatsbyImage>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
query ($slug: String) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }  
`

export default BlogPost;