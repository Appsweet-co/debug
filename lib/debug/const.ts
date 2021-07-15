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
