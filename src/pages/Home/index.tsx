import * as React from "react"
import { Link } from "react-router-dom"

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const [state, setState] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => setState(Math.floor(Math.random() * 6) + 1), 1000)
  }, [])

  return (
    <>
      <h1 data-testid="home-title">
        An Introduction to Test-Driven Development (TDD) on the front-end
      </h1>
      <p>Here is a lovely random number: {state}</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/nope">404 Page</Link>
    </>
  )
}

export { Home }
