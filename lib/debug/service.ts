import { maybe } from '@appsweet-co/utils';

export type DebugType = 'all' | 'log' | 'warn' | 'error';

export interface DebugConfig {
  prefix?: string | null;
  disabled?: DebugType[];
  meta?: boolean;
}

/** @internal */
export const defaults: DebugConfig = {
  disabled: [],
  meta: false,
  prefix: null,
};

/** @internal */
export const maybeDisabled = (val: DebugType[]) => maybe(defaults.disabled, val);

/** @internal */
export const maybeMeta = (active: boolean) => maybe(defaults.meta, active);

/** @internal */
export const maybePrefix = (prefix: string) => maybe(defaults.prefix, prefix);

/** @internal */
export const deactivate = (list: DebugType[]) => {
  return (kind: DebugType) => list.includes('all') || list.includes(kind);
};

/** @internal */
export const format = (prefix: string|null|undefined) => {
  return (...context: any) => (prefix) ? [`[${prefix}]`, ...context] : [...context];
};

/** @internal */
export const meta = (active: boolean|undefined) => {
  return (kind: DebugType) => (active) ? [ `==> [${kind.toUpperCase()}]` ] : [];
};
