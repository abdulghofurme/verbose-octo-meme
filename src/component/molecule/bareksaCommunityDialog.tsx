import BareksaCommunityHome from "@component/atoms/bareksaCommunityDialog/bareksaCommunityHome"
import Dialog, { DialogProps } from "@component/atoms/dialog"
import { FC, useEffect, useState } from "react"
import styles from "@styles/molecule/bareksaCommunityDialog.module.scss"
import BareksaCommunityInfo from "@component/atoms/bareksaCommunityDialog/bareksaCommunityInfo"
import BareksaCommunityInput from "@component/atoms/bareksaCommunityDialog/bareksaCommunityInput"
import BareksaCommunitySuccess from "@component/atoms/bareksaCommunityDialog/bareksaCommunitySuccess"

const BareksaCommunityDialog: FC<DialogProps> = ({
  open,
  onClose = () => {
    console.log("close")
  },
}) => {
  const [dialogVariant, setDialogVariant] = useState<
    "home" | "info" | "input" | "success"
  >("home")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [phoneError, setPhoneError] = useState<string>("")

  const onSubmitCommunity = () => {
    console.log("submit Community")
    if (phoneNumber.length < 11) setPhoneError("Wajib diisi")
    else {
      // TODO: implement submit community to API
      setDialogVariant("success")
    }
  }

  let DialogContent: JSX.Element | null
  switch (dialogVariant) {
    case "home":
      DialogContent = (
        <BareksaCommunityHome
          onClose={onClose}
          onInfo={() => setDialogVariant("info")}
          onNext={() => setDialogVariant("input")}
        />
      )
      break
    case "info":
      DialogContent = (
        <BareksaCommunityInfo
          onBack={() => setDialogVariant("home")}
          onClose={onClose}
        />
      )
      break
    case "input":
      DialogContent = (
        <BareksaCommunityInput
          onBack={() => setDialogVariant("home")}
          onClose={onClose}
          onNext={onSubmitCommunity}
          input={{
            inputProps: {
              value: phoneNumber,
              placeholder: "Test",
              onChange(e) {
                const { value } = e.target
                if (/^[0-9]*$/.test(value)) {
                  setPhoneNumber(e.target.value)
                  setPhoneError("")
                }
              },
              type: "text",
              inputMode: "numeric",
              pattern: "[0-9]*",
            },
            label: "No. HP Aplikasi Telegram",
            error: phoneError,
          }}
        />
      )
      break
    case "success":
      DialogContent = <BareksaCommunitySuccess onClose={onClose} />
      break
    default:
      DialogContent = null
      break
  }

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setDialogVariant("home")
      }, 500)
    }
  }, [open])

  return (
    <Dialog open={open} onClose={onClose} className={styles.dialog}>
      {DialogContent}
    </Dialog>
  )
}

export default BareksaCommunityDialog
