import React from "react";
import Helmet from "react-helmet";
import PageMetadata from "../components/page-metadata";
import Layout from "../components/layout"

export default function Template({
    data
}) {
    const essay = data.markdownRemark; 
    return (
      <Layout>
        <header><h1>{essay.frontmatter.title}</h1></header>
        <article>
          <div class="metadata-container">
              <PageMetadata updated_at={essay.fields.modifiedTime} abstract={ essay.frontmatter.abstract} tags={essay.frontmatter.tags}  created_at={essay.frontmatter.date} confidence={essay.frontmatter.confidence} status={essay.frontmatter.status} />
          </div>
          <div id="TOC" dangerouslySetInnerHTML={{ __html: essay.tableOfContents }}/> 
          <div id="markdownBody">
            <Helmet title={`CodeStack - ${essay.frontmatter.title}`} />
              <div
                className="essay-content"
                dangerouslySetInnerHTML={{ __html: essay.html }}
              />
          </div>
        </article>
      </Layout>
    );
}

export const pageQuery = graphql`
  query EssayByPath($path: String!) {
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