import * as React from "react"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button"

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => (
  <>
    <h1 className="text-center">About page</h1>
    <Button color="secondary">I am a secondary button</Button>
    <Link to="/">Home</Link>
  </>
)

export { About }
