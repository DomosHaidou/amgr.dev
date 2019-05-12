import React from "react";
import Helmet from "react-helmet";

export default function Template({
    data
}) {
    const post = data.markdownRemark; 
    return (
      <div className="essay-container">
       <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
        <div className="essay">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }, name: {eq: "essay"} }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        status
        belief
      }
    }
  }
`
;