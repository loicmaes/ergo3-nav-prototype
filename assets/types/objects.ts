import type {LightType} from "assets/types/enums";
import {AlarmTarget, AlarmType, BlindType, HvacType, PlugType} from "assets/types/enums";

export interface RoomLike {
  id: string;
  name: string;
  displayName: string;
  order: number;
  childs: RoomLike[];
}

export type LightOptions = {
  lightType: LightType;
  lightTypeOption?: string | 'default';
  lightVariationPercentBaseValue?: number;
  lightIntensityMin?: number;
  lightIntensityMax?: number;
  alarmType?: AlarmType;
  alarmActiveState?: number;
  alarmTarget?: AlarmTarget;
  lightAddressBinaryOrder: string;
  lightAddressDimmerUpOrder?: string;
  lightAddressDimmerDownOrder?: string;
  lightAddressVariationOrder?: string;
  lightAddressBinaryStatus: string;
  lightAddressVariationStatus?: string;
  alarmAddressBinaryStatus?: string;
};
export class Light implements RoomLike {
  childs: RoomLike[];
  displayName: string;
  id: string;
  name: string;
  order: number;
  //
  lightType: LightType;
  lightTypeOption?: string | 'default';
  lightVariationPercentBaseValue?: number;
  lightIntensityMin?: number;
  lightIntensityMax?: number;
  alarmType?: AlarmType;
  alarmActiveState?: number;
  alarmTarget?: AlarmTarget;
  lightAddressBinaryOrder: string;
  lightAddressDimmerUpOrder?: string;
  lightAddressDimmerDownOrder?: string;
  lightAddressVariationOrder?: string;
  lightAddressBinaryStatus: string;
  lightAddressVariationStatus?: string;
  alarmAddressBinaryStatus?: string;

  constructor ({ id, name, displayName, order, childs }: RoomLike, { lightType, lightTypeOption, lightVariationPercentBaseValue, lightIntensityMin, lightIntensityMax, alarmType, alarmActiveState, alarmTarget, lightAddressBinaryOrder, lightAddressDimmerUpOrder, lightAddressDimmerDownOrder, lightAddressVariationOrder, lightAddressBinaryStatus, lightAddressVariationStatus, alarmAddressBinaryStatus }: LightOptions) {
    this.id = id;
    this.name = name;
    this.displayName = displayName;
    this.order = order;
    this.childs = childs;
    //
    this.lightType = lightType;
    this.lightTypeOption = lightTypeOption;
    this.lightVariationPercentBaseValue = lightVariationPercentBaseValue;
    this.lightIntensityMin = lightIntensityMin;
    this.lightIntensityMax = lightIntensityMax;
    this.alarmType = alarmType;
    this.alarmActiveState = alarmActiveState;
    this.alarmTarget = alarmTarget;
    this.lightAddressBinaryOrder = lightAddressBinaryOrder;
    this.lightAddressDimmerUpOrder = lightAddressDimmerUpOrder;
    this.lightAddressDimmerDownOrder = lightAddressDimmerDownOrder;
    this.lightAddressVariationOrder = lightAddressVariationOrder;
    this.lightAddressBinaryStatus = lightAddressBinaryStatus;
    this.lightAddressVariationStatus = lightAddressVariationStatus;
    this.alarmAddressBinaryStatus = alarmAddressBinaryStatus;
  }
}

export type BlindOptions = {
  blindType: BlindType;
  alarmType: AlarmType;
  blindSlats: boolean;
  blindAddressOrder: string;
  blindAddressStatus: string;
  alarmAddressStatus: string;
};
export class Blind implements RoomLike {
  childs: RoomLike[];
  displayName: string;
  id: string;
  name: string;
  order: number;
  //
  blindType: string;
  alarmType: string;
  blindSlats: boolean;
  blindAddressOrder: string;
  blindAddressStatus: string;
  alarmAddressStatus: string;

  constructor ({ id, name, displayName, order, childs }: RoomLike, { blindType, alarmType, blindSlats, blindAddressOrder, blindAddressStatus, alarmAddressStatus }: BlindOptions) {
    this.id = id;
    this.name = name;
    this.displayName = displayName;
    this.order = order;
    this.childs = childs;
    //
    this.blindType = blindType;
    this.alarmType = alarmType;
    this.blindSlats = blindSlats;
    this.blindAddressOrder = blindAddressOrder;
    this.blindAddressStatus = blindAddressStatus;
    this.alarmAddressStatus = alarmAddressStatus;
  }
}

export type HvacOptions = {
  hvacType: HvacType;
  hvacTemperatureSetpointMin: number;
  hvacTemperatureSetpointMax: number;
};
export class Hvac implements RoomLike {
  childs: RoomLike[];
  displayName: string;
  id: string;
  name: string;
  order: number;
  //
  hvacType: HvacType;
  hvacTemperatureSetpointMin: number;
  hvacTemperatureSetpointMax: number;

  constructor ({ id, name, displayName, order, childs }: RoomLike, { hvacType, hvacTemperatureSetpointMin, hvacTemperatureSetpointMax }: HvacOptions) {
    this.id = id;
    this.name = name;
    this.displayName = displayName;
    this.order = order;
    this.childs = childs;
    //
    this.hvacType = hvacType;
    this.hvacTemperatureSetpointMin = hvacTemperatureSetpointMin;
    this.hvacTemperatureSetpointMax = hvacTemperatureSetpointMax;
  }
}

export type PlugOptions = {
  plugType: PlugType;
  plugAddressBinaryOrder: string;
  plugAddressBinaryStatus: string;
};
export class Plug implements RoomLike {
  childs: RoomLike[];
  displayName: string;
  id: string;
  name: string;
  order: number;
  //
  plugType: PlugType;
  plugAddressBinaryOrder: string;
  plugAddressBinaryStatus: string;

  constructor ({ id, name, displayName, order, childs }: RoomLike, { plugType, plugAddressBinaryOrder, plugAddressBinaryStatus }: PlugOptions) {
    this.id = id;
    this.name = name;
    this.displayName = displayName;
    this.order = order;
    this.childs = childs;
    //
    this.plugType = plugType;
    this.plugAddressBinaryOrder = plugAddressBinaryOrder;
    this.plugAddressBinaryStatus = plugAddressBinaryStatus;
  }
}
