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
        <article>
          <div class="metadata-container">
            <PageMetadata abstract={ essay.frontmatter.abstract} tags={essay.frontmatter.tags}/>
          </div>
          <div className="essay-container">
            <Helmet title={`CodeStack - ${essay.frontmatter.title}`} />
            <div className="essay">
              <h1>{essay.frontmatter.title}</h1>
              <div
                className="essay-content"
                dangerouslySetInnerHTML={{ __html: essay.html }}
              />
            </div>
          </div>
        </article>
      </Layout>
    );
}

export const pageQuery = graphql`
  query EssayByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
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
`
;