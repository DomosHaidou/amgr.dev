import React from "react"
import { StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import Helmet from 'react-helmet'

const IndexPage = ({
  data: {
    allMdx: { edges },
    site: {siteMetadata}
  },
}) => {
  const RecentEssays = edges
    .filter(edge => (process.env.NODE_ENV === 'development' || edge.node.frontmatter.published))
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  const description = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(siteMetadata.description).toString()
  const information = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(siteMetadata.information).toString()

  return (


  <Layout>
    <Helmet
        bodyAttributes={{
            class: 'siteIndex'
        }}
    />
    <article>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div id="markdownBody">
      <div id="abstract" dangerouslySetInnerHTML={{__html: description + information }} /> 
      <section id="recent-essays">
        <h1>Recent Essays</h1>
        {RecentEssays}
      </section>
      <section id="popular-essays">
        <h1>Popular Essays</h1>
        {RecentEssays}
      </section>
      </div>
    </article>
  </Layout>)
}

export default IndexPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      description
      information
    }
  }
  allMdx(
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
          confidence
          abstract
        }
      }
    }
  }
}
`