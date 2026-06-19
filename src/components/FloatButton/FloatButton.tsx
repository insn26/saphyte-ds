import React from "react";
import "./FloatButton.css";

const DefaultIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.25 15.75C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25H7.81065L9.31065 3.75H15C15.4142 3.75 15.75 4.08579 15.75 4.5V6.75H14.25V5.25H8.68935L7.18934 3.75H3V12.7485L4.125 8.25H16.875L15.142 15.1819C15.0586 15.5158 14.7586 15.75 14.4144 15.75H2.25ZM14.9538 9.75H5.29616L4.17116 14.25H13.8288L14.9538 9.75Z"
      fill="currentColor"
    />
  </svg>
);

export interface FloatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "default" | "primary";
  shape?: "circle" | "square";
  iconNode?: React.ReactNode;
}

export const FloatButton: React.FC<FloatButtonProps> = ({
  type = "default",
  shape = "circle",
  iconNode,
  className = "",
  style,
  children,
  ...props
}) => {
  const classNames = [
    "ds-float-btn",
    `ds-float-btn-${type}`,
    `ds-float-btn-${shape}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} style={style} {...props}>
      {children || (
        <span className="ds-float-btn-icon">
          {iconNode || <DefaultIcon />}
        </span>
      )}
    </button>
  );
};
