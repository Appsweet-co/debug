import { DebugType } from './const';

const style = (config: { uppercase: boolean; }) => (val: string) => {
  const { uppercase } = config;
  return (val.length === 0) ? '' : `[${uppercase ? val.toUpperCase() : val}]`;
};

const none = style({ uppercase: false });
const upper = style({ uppercase: true });

export const format = (prefix: string) => (meta: string) => <T extends string>(msgs: T[]) => {
  return [upper(meta), none(prefix), ...msgs].filter(x => x.length);
};

export const deactivate = (list: DebugType[]) => {
  return (kind: DebugType) => list.includes('all') || list.includes(kind);
};
