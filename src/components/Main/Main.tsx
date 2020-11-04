import React, { FunctionComponent } from "react";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";
import { KeyboardWithInstrument } from "../Keyboard";

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
