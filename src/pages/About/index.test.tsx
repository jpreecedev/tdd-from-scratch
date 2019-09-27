import * as React from "react"

import { About } from "."

describe("<About /> tests", () => {
  it("should match snapshot", () => {
    expect(<About />).toMatchSnapshot()
  })
})
