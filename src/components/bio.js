import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="container shadow-lg bg-primary flex flex-row">
      <div>
        <h2>
          <strong>{author}</strong>, Desarrollador Fullstack Javascript
        </h2>
        <p>Apasionado del desarrollo web, actualmente trabajo como Senior Frontend en zemoga</p>
      </div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        className="bg-red-500"
      />
    </div>
  )
}

export default Bio
