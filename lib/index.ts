import { DebugConfig } from './const';
import { deactivate, formatMsg, getDisabled, getMeta, getPrefix, showMeta } from './service';

export const Debug = (config: DebugConfig) => {
  const disabled = deactivate(getDisabled(config.disabled));
  const meta = showMeta(getMeta(config.meta));
  const msg = formatMsg(getPrefix(config.prefix));

  return {
    log: <T extends string>(...context: T[]) => {
      if (disabled('log')) return;
      console.log(...meta('log'), ...msg(...context));
    },

    warn: <T extends string>(...context: T[]) => {
      if (disabled('warn')) return;
      console.warn(...meta('warn'), ...msg(...context));
    },

    error: <T extends string>(...context: T[]) => {
      if (disabled('error')) return;
      console.error(...meta('error'), ...msg(...context));
    }
  };
};
