export type DebugType = 'all' | 'log' | 'warn' | 'error';

export interface Opts {
  disabled?: DebugType[];
  prefix?: string | null;
  showMeta?: boolean;
}

export const defaults: Opts = {
  disabled: [],
  prefix: null,
  showMeta: false,
};
