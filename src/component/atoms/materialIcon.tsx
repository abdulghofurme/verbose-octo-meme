import { FC, MouseEventHandler } from "react";

interface MaterialIconProps {
  icon: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  className?: string;
}

const MaterialIcon: FC<MaterialIconProps> = ({
  icon,
  onClick,
  className = "",
}) => (
  <>
    <span
      className={`material-icon material-symbols-rounded ${className}`}
      onClick={onClick}
    >
      {icon}
    </span>
  </>
);

export default MaterialIcon;
