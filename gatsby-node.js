/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const _ = require("lodash");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const essayTemplate = path.resolve(`src/templates/essay.jsx`);
  const tagTemplate = path.resolve(`src/templates/tags.jsx`);
  const markdownPageTemplate = path.resolve(`src/templates/markdown-page.jsx`);
return graphql(`
  {
    essays: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: {regex : "/essays/"} },
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            abstract
            title
            tags
          }
        }
      }
    }
    pages: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: {regex : "/pages/"} },
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      const essays = result.data.essays.edges

      // Create post detail pages
      essays.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: essayTemplate,
            context: {} // additional data can be passed via context
          });
      });

      // Tag pages:
      let tags = []
      // Iterate through each post, putting all found tags into `tags`
      _.each(essays, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })

      // Eliminate duplicate tags
      tags = _.uniq(tags)

      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });


      const markdownPages = result.data.pages.edges

      // Create post detail pages
      markdownPages.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: markdownPageTemplate,
            context: {} // additional data can be passed via context
          });
      });
    });
}
