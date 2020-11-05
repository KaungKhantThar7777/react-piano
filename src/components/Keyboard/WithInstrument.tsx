import React, { FunctionComponent } from "react";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "./Keyboard";
import { useInstrument } from "../../state/Instrument";
import { withInstrument } from "../../adapters/Soundfont/withInstrument";

const WrappedKeyboard = withInstrument(Keyboard);

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
