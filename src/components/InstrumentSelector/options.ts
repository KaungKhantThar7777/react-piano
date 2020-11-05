import { InstrumentName } from "soundfont-player";
import instruments from "soundfont-player/names/musyngkite.json";
interface Option {
  value: InstrumentName;
  label: string;
}

type OptionList = Option[];
type InstrumentList = InstrumentName[];

function normalizeList(list: InstrumentList): OptionList {
  return list.map(instrument => ({
    value: instrument,
    label: instrument.replace(/_/gi, " "),
  }));
}

export const options = normalizeList(instruments as InstrumentList);
