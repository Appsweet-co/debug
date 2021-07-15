export type DebugType = 'all' | 'log' | 'warn' | 'error';

export interface DebugOpts {
  disabled?: DebugType[];
  prefix?: string | null;
  showMeta?: boolean;
}

export const defaults: DebugOpts = {
  disabled: [],
  prefix: null,
  showMeta: false,
};
