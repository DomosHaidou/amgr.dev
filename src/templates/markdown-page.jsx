import React from "react";
import Helmet from "react-helmet";
import PageMetadata from "../components/page-metadata";
import TOC from "../components/toc";
import Layout from "../components/layout"
import MDXRenderer from "gatsby-mdx/mdx-renderer";

export default function Template({
    data
}) {
    const page = data.mdx; 
    return (
      <Layout>
        <header><h1>{page.frontmatter.title}</h1></header>
        <article>
          <div class="metadata-container">
              <PageMetadata updated_at={page.fields.modifiedTime} abstract={ page.frontmatter.abstract} tags={page.frontmatter.tags} created_at={page.frontmatter.date} confidence={page.frontmatter.confidence} status={page.frontmatter.status} />
          </div>
          <div id="TOC">
          <React.Fragment>
            <TOC item={page.tableOfContents} level={0} maxDepth={3}/> 
          </React.Fragment>
          </div>
          <div id="markdownBody">
            <Helmet title={`AMGR - ${page.frontmatter.title}`} />
              <div className="page-content">
                  <MDXRenderer>{page.code.body}</MDXRenderer>
              </div>
          </div>
        </article>
      </Layout>
    );
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path }}) {
      html
      code {
        body
      }
      tableOfContents(maxDepth:2)
      fields{
        modifiedTime
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
