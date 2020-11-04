import React, { FunctionComponent } from "react";
import { selectKey } from "../../domain/keyboard";
import { MidiValue, notes } from "../../domain/note";
import { Key } from "../Key";

interface KeyboardProps {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
}
export const Keyboard: FunctionComponent<KeyboardProps> = ({
  loading,
  play,
  stop,
}) => {
  return (
    <div className="keyboard">
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index);
        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};
