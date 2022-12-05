import { FC } from "react"
import Dialog, { DialogProps } from "../atoms/dialog"
import styles from "@styles/molecule/registerDialog.module.scss"
import Link from "next/link"
import Image from "next/image"
import MaterialIcon from "@component/atoms/material-ui/materialIcon"
import { BASE_IMAGE_URL, BASE_URL } from "@config/env"

const navigations: {
  url: string
  imageURL: string
  title: string
  subtitle: string
}[] = [
  {
    url: `${BASE_URL}/register`,
    imageURL: `${BASE_IMAGE_URL}/illustrations/1/individual.svg`,
    title: "Perseorangan",
    subtitle:
      "Untuk individu yang ingin berinvestasi memiliki rekening bank a/n pribadi",
  },
  {
    url: `${BASE_URL}/bisnis#form-bisnis`,
    imageURL: `${BASE_IMAGE_URL}/illustrations/1/institution.svg`,
    title: "Institusi",
    subtitle:
      "Untuk perusahaan / organisasi berbadan hukum & memiliki rekening a/n perusahaan",
  },
]

const RegisterDialog: FC<DialogProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={`${styles.register_dialog} b-color-bg__surface--light`}
    >
      <h6 className="b-typography__h6 b-color-text__onsurface--high-emphasis">
        Pilih Jenis Pendaftaran
      </h6>

      <nav>
        {navigations.map(({ url, imageURL, title, subtitle }) => (
          <Link href={url} key={url}>
            <Image
              src={imageURL}
              width={136}
              height={120}
              alt={`Illustrasi Pendaftaran ${title}`}
            />
            <div>
              <p className="b-typography__subtitle-1--medium b-color-text__onsurface--high-emphasis">
                {title}
              </p>
              <p className="b-typography__body-2--reguler b-color-text__onsurface--medium-emphasis">
                {subtitle}
              </p>
            </div>
            <MaterialIcon icon="chevron_right" />
          </Link>
        ))}
      </nav>
    </Dialog>
  )
}

export default RegisterDialog
