import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
const _ = require("lodash");


const PageMetadata = ({ abstract, tags, updated_at, created_at, status, confidence }) => (
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
          <p id="information">
                <span id="created_at">created: <em>{created_at}</em></span>
                <span id="updated_at">last_update: <em>{updated_at}</em></span>
                <span id="status">status: <em>{status}</em></span>
                <span id="confidence">confidence: <em>{confidence}</em></span>
          </p>
      </div>
  )

  export default PageMetadata
  