import { FC, PropsWithChildren, HtmlHTMLAttributes } from "react"
import styles from "@styles/atoms/button.module.scss"

interface ButtonProps extends PropsWithChildren {
  variant: "outlined"
  color: "primary"
  fullWidth?: boolean
}

const Button: FC<ButtonProps & HtmlHTMLAttributes<HTMLButtonElement>> = ({
  className = "",
  color,
  variant,
  children,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={`b-typography__button ${className} ${styles.button} ${
        styles[variant]
      } ${styles[`${variant}--${color}`]}`}
      {...props}
      data-fullwidth={fullWidth}
    >
      {children}
    </button>
  )
}

export default Button
