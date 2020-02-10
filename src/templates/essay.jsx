import React from "react";
import Helmet from "react-helmet";
import PageMetadata from "../components/page-metadata";
import TOC from "../components/toc";
import Layout from "../components/layout"
import MDXRenderer from "gatsby-mdx/mdx-renderer";


export default function Template({
    data
}) {
    const essay = data.mdx; 
    return (
      <Layout>
        <header><h1>{essay.frontmatter.title}</h1></header>
        <article>
          <div class="metadata-container">
              <PageMetadata updated_at={essay.fields.modifiedTime} abstract={ essay.frontmatter.abstract} tags={essay.frontmatter.tags}  created_at={essay.frontmatter.date} confidence={essay.frontmatter.confidence} status={essay.frontmatter.status} />
          </div>
          <div id="TOC">
          <React.Fragment>
            <TOC item={essay.tableOfContents} level={0} maxDepth={3}/> 
          </React.Fragment>
          </div>          
          <div id="markdownBody">
            <Helmet title={`CodeStack - ${essay.frontmatter.title}`} />
              <div className="essay-content">
                <MDXRenderer>{essay.code.body}</MDXRenderer>
              </div>
          </div>
        </article>
      </Layout>
    );
}

export const pageQuery = graphql`
  query EssayByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path }}) {
      code {
        body
      }
      tableOfContents
      fields{
        modifiedTime
      }
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
`
;