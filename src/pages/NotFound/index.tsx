import * as React from "react"
import { Link } from "react-router-dom"

const NotFound = () => (
  <>
    <h1 className="text-center">404.</h1>
    <p>Sorry the requested page was not found</p>
    <Link to="/">Home</Link>
  </>
)

export { NotFound }
