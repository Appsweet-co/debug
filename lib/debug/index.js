import { deactivate, format, maybeDisabled, maybeMeta, maybePrefix, meta } from './service';
export const Debug = (config) => {
    const disabled = deactivate(maybeDisabled(config.disabled));
    const cat = meta(maybeMeta(config.meta));
    const msg = format(maybePrefix(config.prefix));
    const log = (...context) => {
        if (disabled('log'))
            return;
        console.log(...cat('log'), ...msg(...context));
    };
    const warn = (...context) => {
        if (disabled('warn'))
            return;
        console.warn(...cat('warn'), ...msg(...context));
    };
    const error = (...context) => {
        if (disabled('error'))
            return;
        console.error(...cat('error'), ...msg(...context));
    };
    return { log, warn, error };
};