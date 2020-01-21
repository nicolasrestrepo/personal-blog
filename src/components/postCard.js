import React from "react"
import { rhythm } from "../utils/typography"
import Link from "gatsby-link"

const PostCard = ({ node }) => {

  const title = node.frontmatter.title || node.fields.slug

  return (
    <article key={node.fields.slug}
      className="shadow-lg h-20 w-60"
    >
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>

  )
}

export default PostCard
