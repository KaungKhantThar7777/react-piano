/// <reference types="react-scripts" />

type AudioContextType = typeof AudioContext;
type SoundfontType = typeof Soundfont;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Window extends Window {
  webkitAudioContext: AudioContextType;
}
