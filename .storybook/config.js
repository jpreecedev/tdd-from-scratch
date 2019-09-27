import { configure } from "@storybook/react"
import "../src/global/styles.css"

const req = require.context("../src", true, /\.stories\.jsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
