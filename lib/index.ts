import { DebugOpts, defaults } from './const';
import { deactivate, format } from './service';

export const Debug = (opts: DebugOpts) => {
  const config = { ...defaults, ...opts };

  const disabled = deactivate(config.disabled);
  const prefixed = format(config.prefix);

  return {
    log: <T extends string>(...context: T[]) => {
      if (disabled('log')) return;
      const msgs = prefixed(config.showMeta ? 'log' : '');
      console.log(...msgs(context));
    },

    warn: <T extends string>(...context: T[]) => {
      if (disabled('warn')) return;
      const msgs = prefixed(config.showMeta ? 'warn' : '');
      console.warn(...msgs(context));
    },

    error: <T extends string>(...context: T[]) => {
      if (disabled('error')) return;
      const msgs = prefixed(config.showMeta ? 'error' : '');
      console.error(...msgs(context));
    }
  };
};
