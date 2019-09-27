import * as React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, select } from "@storybook/addon-knobs"

import { Button } from "./Button"

const stories = storiesOf("Components", module)
stories.addDecorator(withKnobs)

stories.add(
  "Button",
  () => {
    const options = {
      Primary: "primary",
      Secondary: "secondary"
    }

    return (
      <Button color={select("color", options)} onClick={action("onClick")}>
        {text("content", "I am a button")}
      </Button>
    )
  },
  { info: { inline: true } }
)
