import {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from "react";

const Button = forwardRef(
  (
    {
      children,
      className,
      disabled,
      onClick,
      onKeyDown,
      prefix,
      suffix,
      ...props
    }: ButtonArgs,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className={className}
        {...props}
      >
        {prefix} {children} {suffix}
      </button>
    );
  }
);

export type ButtonArgs = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  onKeyDown?: KeyboardEventHandler;
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

Button.displayName = "Button";

export { Button };
