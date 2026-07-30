export type GestureName =
  | "Open Palm"
  | "Closed Fist"
  | "Pointing Up"
  | "Thumb Up"
  | "Victory"
  | "ILoveYou";

export interface GesturePrediction {
  gesture: GestureName | "Unknown";
  confidence: number;
  timestamp: number;
}

export interface CameraState {
  isRunning: boolean;
  fps: number;
}

export interface AppSettings {
  mirrorCamera: boolean;
  showLandmarks: boolean;
  enableSound: boolean;
}