/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "../components/image"

import Header from "./header"
import "../assets/css/base.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div id="sidebar">
          <div id="sidebar-links">
             <Link to="/"><Image /></Link>
             <Link to="/">Home</Link>
             <Link to="/site">Site</Link>
             <Link to="/about">Me</Link>
          </div>

        </div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <article>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </article>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
