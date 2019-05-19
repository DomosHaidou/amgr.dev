import React from "react"
import { StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/post-link"


import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    site: {siteMetadata}
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
  const description = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(siteMetadata.description).toString()

  return (<Layout>
    <article>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p dangerouslySetInnerHTML={{__html: description }} />
      <div>{Posts}</div>
    </article>
  </Layout>)
}

export default IndexPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      description
    }
  }
  allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "/essays/"} },
      sort: {fields: [frontmatter___date], order: DESC},
  ){
    edges{
      node{
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          tags
          status
          belief
          abstract
        }
      }
    }
  }
}
`