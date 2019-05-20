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
import "../assets/css/prism-base2tone-evening-dark.css"
import PageMetadata from "./page-metadata";

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
             <Link to="/pages/site">Site</Link>
             <Link to="/pages/about">Me</Link>
             <Link to="/tags">Tags</Link>
          </div>
        </div>
        <main>
            {children}
        </main>
        <footer>
              © {new Date().getFullYear()}
              {` `}
              <a href="https://www.amgr.dev/about">AMGR</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
