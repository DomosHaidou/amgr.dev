import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
const _ = require("lodash");


const PageMetadata = ({ abstract, tags }) => (
      <div id="page-metadata">
          <p id="abstract">{abstract}</p>
          <p id="topics">topics: 
            <span id="tags">
                <em>
                {tags.map((tag)=> {
                        return (
                            <span>
                                <Link to={"/tags/" + _.kebabCase(tag)}>{tag}</Link> 
                                <span>,</span>
                            </span>
                        )
                })}
                </em>
            </span>
          </p>
      </div>
  )

  export default PageMetadata
  