import PropTypes from "prop-types"
import React from "react"


const PageMetadata = ({ abstract, tags }) => (
      <div id="page-metadata">
          <p id="abstract">{abstract}</p>
          <p id="topics">topics: {tags}</p>
      </div>
  )

  export default PageMetadata
  