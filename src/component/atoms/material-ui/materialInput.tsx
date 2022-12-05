import { FC, InputHTMLAttributes, LabelHTMLAttributes } from "react"
import styles from "@styles/atoms/material-ui/materialInput.module.scss"

export interface MaterialInputProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  label: string
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>
  error?: string
}

const MaterialInput: FC<MaterialInputProps> = ({
  inputProps,
  labelProps,
  label,
  error,
}) => (
  <>
    <div className={`${styles.container} ${error ? `container--error` : ""}`}>
      <input
        className="b-typography__subtitle-1--medium b-color-text__onsurface--high-emphasis"
        {...inputProps}
      />
      <label
        className="b-typography__subtitle-1--medium b-color-text__onsurface--medium-emphasis b-color-bg__surface--light"
        {...labelProps}
      >
        {label}
      </label>
    </div>
    {error && (
      <span
        className={`b-typography__caption b-color-text__red ${styles.error}`}
      >
        {error}
      </span>
    )}
  </>
)

export default MaterialInput
