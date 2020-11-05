import React, { FunctionComponent, useEffect } from "react";
import { useAudioContext } from "../AudioContextProvider";
import { useSoundfont } from "../../adapters/Soundfont";
import { Keyboard } from "./Keyboard";
import { useInstrument } from "../../state/Instrument";

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [current, instrument, load, loading]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
