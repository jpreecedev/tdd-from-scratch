import * as React from "react"
import { storiesOf } from "@storybook/react"

import { Layout } from "./Layout"

const stories = storiesOf("Components", module)

stories.add("Layout", () => <Layout />, { info: { inline: true } })
