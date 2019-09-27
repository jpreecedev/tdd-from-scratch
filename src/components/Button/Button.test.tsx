import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Button } from "./Button"
import "@testing-library/jest-dom/extend-expect"

describe("<Button /> tests", () => {
  it("should render as default button", () => {
    // Arrange
    const content = "Hello, World!"

    // Act
    const { getByTestId, container } = render(<Button>{content}</Button>)

    // Assert
    expect(container).toMatchSnapshot()
    expect(getByTestId("button")).toHaveClass("button-primary")
    expect(container).toHaveTextContent(content)
  })

  it("should render a secondary button", () => {
    // Arrange
    const content = "Hello, World!"
    const color = "secondary"

    // Act
    const { getByTestId, container } = render(<Button color={color}>{content}</Button>)

    // Assert
    expect(container).toMatchSnapshot()
    expect(getByTestId("button")).toHaveClass(`button-${color}`)
    expect(container).toHaveTextContent(content)
  })

  it("should call the click callback handler", () => {
    // Arrange
    const content = "Hello, World!"
    const color = "secondary"
    const onClick = jest.fn()

    // Act
    const { getByTestId } = render(
      <Button color={color} onClick={onClick}>
        {content}
      </Button>
    )

    fireEvent.click(getByTestId("button"))

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
