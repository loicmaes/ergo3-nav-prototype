export enum Topology {
  BUILDING = 'building',
  CORRIDOR = 'corridor',
  ROOM = 'room',
  LIGHT = 'light',
  BLIND = 'heat',
  HEAT = 'heat'
}
export enum LightMode {
  TOGGLE = 'toggle',
  RANGE = 'range'
}
export enum TemperatureUnit {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit'
}

export type FunctionComposable = BuildingLike | Light | Blind | Heat;
export type BuildingLike = {
  name: string,
  topology: Topology,
  systems?: FunctionComposable[]
};
export type Light = {
  name: string,
  topology: Topology.LIGHT,
  mode: LightMode
  state: boolean
};
export type Blind = {
  name: string,
  topology: Topology.BLIND,
  state: number
};
export type Heat = {
  name: string,
  topology: Topology.HEAT,
  target: number,
  unit: TemperatureUnit,
  state: number
};
