import { GestureName } from "../types/gesture";

export const GESTURES: GestureName[] = [
  "Open Palm",
  "Closed Fist",
  "Pointing Up",
  "Thumb Up",
  "Victory",
  "ILoveYou",
];

export const GESTURE_DESCRIPTIONS: Record<GestureName, string> = {
  "Open Palm": "Open your hand with fingers spread.",
  "Closed Fist": "Close your hand into a fist.",
  "Pointing Up": "Raise your index finger upward.",
  "Thumb Up": "Show a thumbs up gesture.",
  "Victory": "Raise your index and middle fingers.",
  "ILoveYou": "American Sign Language 'I Love You' gesture.",
};

export const DEFAULT_CONFIDENCE = 0;

export const CONFIDENCE_THRESHOLD = 0.75;