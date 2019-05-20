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
          <div id="markdownBody">
            <div class="metadata-container">
              <PageMetadata abstract={ essay.frontmatter.abstract} tags={essay.frontmatter.tags}/>
            </div>
            <Helmet title={`CodeStack - ${essay.frontmatter.title}`} />
              <h1>{essay.frontmatter.title}</h1>
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