import * as React from "react"
import { Link } from "react-router-dom"

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => (
  <>
    <h1 className="text-center">About page</h1>
    <Link to="/">Home</Link>
  </>
)

export { About }
