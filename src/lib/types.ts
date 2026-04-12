export interface SensorData {
  airHumidity: number;
  airTemperature: number;
  solutionPh: number;
  solutionTds: number;
  solutionTemperature: number;
  timestamp: string;
}

export interface ActuatorState {
  ledLight: boolean;
  internalFan: boolean;
  exhaustFan: boolean;
  mainPump: boolean;
  phPlusPump: boolean;
  phMinusPump: boolean;
  nutrientAPump: boolean;
  nutrientBPump: boolean;
}

export interface ThresholdSettings {
  airHumidityMin: number;
  airHumidityMax: number;
  airTemperatureMin: number;
  airTemperatureMax: number;
  solutionPhMin: number;
  solutionPhMax: number;
  solutionTdsMin: number;
  solutionTdsMax: number;
  solutionTemperatureMin: number;
  solutionTemperatureMax: number;
}
