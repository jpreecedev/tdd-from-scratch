import * as React from "react"

import { NotFound } from "."

describe("<NotFound /> tests", () => {
  it("should match snapshot", () => {
    expect(<NotFound />).toMatchSnapshot()
  })
})
