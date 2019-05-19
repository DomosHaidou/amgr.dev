import PropTypes from "prop-types"
import React from "react"


const PageMetadata = ({ abstract, tags }) => (
      <div id="metadata">
          <p>{abstract}</p>
          <p>topics: {tags}</p>
      </div>
  )

  export default PageMetadata
  