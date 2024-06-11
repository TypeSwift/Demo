export enum Device {
  Phone = 'Phone',
  Pad = 'Pad',
  Mac = 'Mac',
  TV = 'TV',
  Vision = 'Vision',
}

export type OperatingSystemType = keyof typeof OperatingSystems;
export const OperatingSystems = {
  iOS: 'iOS',
  iPadOS: 'iPadOS',
  macOS: 'macOS',
  tvOS: 'tvOS',
  visionOS: 'visionOS',
} as const;

export const exposedTypes = {
  Device,
  OperatingSystems,
};
