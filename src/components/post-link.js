import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <ul>
    <li><Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link></li>
  </ul>
)

export default PostLink