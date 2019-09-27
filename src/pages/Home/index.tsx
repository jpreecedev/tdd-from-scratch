import * as React from "react"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button"

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const [state, setState] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => setState(Math.floor(Math.random() * 6) + 1), 1000)
  }, [])

  return (
    <>
      <h1 data-testid="home-title">
        A bare bones React boilerplate, featuring Webpack 4, React, Jest, PostCSS and
        TypeScript
      </h1>
      <p>Here is a lovely random number: {state}</p>
      <Button>I am a primary button</Button>
      <Link to="/about">About</Link>
      <br />
      <Link to="/nope">404 Page</Link>
    </>
  )
}

export { Home }
