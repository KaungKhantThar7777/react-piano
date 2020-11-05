import React, { FunctionComponent, ReactEventHandler } from "react";
import { NoteType } from "../../domain/note";
import clsx from "clsx";
import "./style.css";
import { usePressObserver } from "../PressObserver/usePressObserver";

interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onDown: ReactEventHandler<HTMLButtonElement>;
  onUp: ReactEventHandler<HTMLButtonElement>;
}

export const Key: FunctionComponent<KeyProps> = props => {
  const { label, type, onDown, onUp, ...rest } = props;

  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });
  return (
    <button
      className={clsx(`key key--${type}`, pressed && "is-pressed")}
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
