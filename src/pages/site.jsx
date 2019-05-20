import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SiteInfoPage = () => (
  <Layout>
    <SEO title="Site Information" />
    <header><h1>About This site</h1></header>
    <article>
        <div class="metadata-container">
        </div>
        <div id="TOC" /> 
        <div id="markdownBody">
        </div>
    </article>

  </Layout>
)

export default SiteInfoPage
