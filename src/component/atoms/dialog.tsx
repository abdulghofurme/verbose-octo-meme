import { FC, PropsWithChildren, useEffect, useRef } from "react";
import styles from "@styles/atoms/dialog.module.scss";

export interface DialogProps extends PropsWithChildren {
  open?: boolean;
  onClose?: () => void;
  className?: string;
  dataDialog?: string;
}

const Dialog: FC<DialogProps> = ({
  open = false,
  onClose = () => {
    console.log("close");
  },
  children,
  dataDialog = "",
  className = "",
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      if (!dialogRef.current?.open) dialogRef?.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className={`${styles.dialog} ${className}`}
      data-dialog={dataDialog}
      onClick={(event) => {
        const rect = dialogRef.current?.getBoundingClientRect() || {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        };

        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          onClose();
        }
      }}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
