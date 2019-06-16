import React from "react"

const TOC = ({ item, level, maxDepth }) => {
    let items = null
    if (item.items && level < maxDepth) {
        items = (
        <ul style={{ marginLeft: `${level * 10}px`}} data-maxDepth={maxDepth} data-level={level}>
        {item.items.map(i => <TOC item={i} key={i.title} level={level+1} maxDepth={maxDepth} />)}
        </ul>
    )
    }
    if (!item.title) {
        return items
    }
    return (
        <li><a href={item.url}>{item.title}</a>{items}</li>
    )
}

      
export default TOC