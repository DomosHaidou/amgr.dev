import React from "react";
import Helmet from "react-helmet";
import PageMetadata from "../components/page-metadata";
import Layout from "../components/layout"

export default function Template({
    data
}) {
    const page = data.markdownRemark; 
    return (
      <Layout>
        <header><h1>{page.frontmatter.title}</h1></header>
        <article>
          <div class="metadata-container">
              <PageMetadata updated_at={page.fields.modifiedTime} abstract={ page.frontmatter.abstract} tags={page.frontmatter.tags} created_at={page.frontmatter.date} confidence={page.frontmatter.confidence} status={page.frontmatter.status} />
          </div>
          <div id="TOC" dangerouslySetInnerHTML={{ __html: page.tableOfContents }}/> 
          <div id="markdownBody">
            <Helmet title={`AMGR - ${page.frontmatter.title}`} />
              <div
                className="page-content"
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
          </div>
        </article>
      </Layout>
    );
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      tableOfContents(
        pathToSlugField: "frontmatter.path"
        maxDepth: 4
      )
      fields{
        modifiedTime(formatString: "MMMM DD, YYYY")
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        abstract
        title
        confidence
        status
        tags
      }
    }
  }
`
;