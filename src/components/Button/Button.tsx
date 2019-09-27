import * as React from "react"

interface ButtonProps {
  color?: "primary" | "secondary"
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  color = "primary"
}) => {
  return (
    <button
      data-testid="button"
      type="button"
      className={`button button-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { Button }
