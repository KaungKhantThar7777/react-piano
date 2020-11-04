import React, { FunctionComponent, ReactEventHandler } from "react";
import { NoteType } from "../../domain/note";
import clsx from "clsx";
import "./style.css";

interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onDown: ReactEventHandler<HTMLButtonElement>;
  onUp: ReactEventHandler<HTMLButtonElement>;
}

export const Key: FunctionComponent<KeyProps> = props => {
  const { label, type, onDown, onUp, ...rest } = props;
  return (
    <button
      className={clsx(`key key--${type}`)}
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
