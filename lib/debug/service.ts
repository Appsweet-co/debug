import { Maybe } from 'true-myth/maybe';
import { DebugType, defaults } from './const';

/** @internal */
export const maybeDisabled = (val: DebugType[]) => Maybe.of(val).unwrapOr(defaults.disabled);

/** @internal */
export const maybeMeta = (active: boolean) => Maybe.of(active).unwrapOr(defaults.meta);

/** @internal */
export const maybePrefix = (prefix: string) => Maybe.of(prefix).unwrapOr(defaults.prefix);

/** @internal */
export const deactivate = (list: DebugType[]) => {
  return (kind: DebugType) => list.includes('all') || list.includes(kind);
};

/** @internal */
export const format = (prefix: string | null | undefined) => {
  return (...context: any) => (prefix) ? [`[${prefix}]`, ...context] : [...context];
};

/** @internal */
export const meta = (active: boolean | undefined) => {
  return (kind: DebugType) => (active) ? [`==> [${kind.toUpperCase()}]`] : [];
};
