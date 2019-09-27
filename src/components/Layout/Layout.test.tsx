import * as React from "react"

import { Layout } from "./Layout"

describe("<Layout /> tests", () => {
  it("should match snapshot", () => {
    expect(<Layout />).toMatchSnapshot()
  })
})
