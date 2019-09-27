import * as React from "react"
import { Home } from "."
import { BrowserRouter as Router } from "react-router-dom"

import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe("<Home /> tests", () => {
  const renderComponent = () =>
    render(
      <Router>
        <Home />
      </Router>
    )

  it("should match snapshot", () => {
    expect(<Home />).toMatchSnapshot()
  })

  it("should render with correct as title", () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId("home-title")).toHaveTextContent(
      "A bare bones React boilerplate, featuring Webpack 4, React, Jest, PostCSS and TypeScript"
    )
  })
})
