import { DebugConfig } from './const';
import { deactivate, format, maybeDisabled, maybeMeta, maybePrefix, meta } from './service';

export const Debug = (config: DebugConfig) => {
  const disabled = deactivate(maybeDisabled(config.disabled));
  const cat = meta(maybeMeta(config.meta));
  const msg = format(maybePrefix(config.prefix));

  const log = (...context: any[]) => {
    if (disabled('log')) return;
    console.log(...cat('log'), ...msg(...context));
  };

  const warn = (...context: any[]) => {
    if (disabled('warn')) return;
    console.warn(...cat('warn'), ...msg(...context));
  };

  const error = (...context: any[]) => {
    if (disabled('error')) return;
    console.error(...cat('error'), ...msg(...context));
  };

  return { log, warn, error };
};
