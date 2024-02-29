import { useMemo } from "react";
import "./Button.css";

const ButtonMemo: React.FC<any> = ({
  label,
  type,
  icon,
  iconRight,
  iconLeft,
}) => {

  const variant = useMemo(
    () => (type === 'outlined' ? 'button--outline' : 'button--fill'),
    [type]
  );

  const textColor = useMemo(() => {
    if (type === "fill") {
      return 'text-secondary';
    } else {
      return 'text-primary';
    }
  }, [type]);

  return (
    <>
      {type === "icon" ? (
        <a className={"button--icon"}>{icon}</a>
      ) : (
        <button
          className={`button ${variant} ${textColor} `}
          type="button"
        >
          {iconLeft}
          {label}
          {iconRight}
        </button>
      )}
    </>
  );
};

export default ButtonMemo;
