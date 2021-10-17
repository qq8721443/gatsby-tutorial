import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                          <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                          </Link>
                        </h2>
                        <p>Date: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        id
        slug
      }
    }
  }
`

export default BlogPage;