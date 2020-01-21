import React from "react"
import { Link } from "gatsby"

function Layout({ children, title}){
  return (
    <div className="container theme-light">
      <div className="w-full">{title}</div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
