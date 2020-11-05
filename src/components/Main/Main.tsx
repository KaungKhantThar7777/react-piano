import React, { FunctionComponent } from "react";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";
import { Playground } from "../Playground";

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
