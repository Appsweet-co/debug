import { maybe } from '@appsweet-co/utils';
export const defaults = {
    disabled: [],
    meta: false,
    prefix: null,
};
export const maybeDisabled = (val) => maybe(defaults.disabled, val);
export const maybeMeta = (active) => maybe(defaults.meta, active);
export const maybePrefix = (prefix) => maybe(defaults.prefix, prefix);
export const deactivate = (list) => {
    return (kind) => list.includes('all') || list.includes(kind);
};
export const format = (prefix) => {
    return (...context) => (prefix) ? [`[${prefix}]`, ...context] : [...context];
};
export const meta = (active) => {
    return (kind) => (active) ? [`==> [${kind.toUpperCase()}]`] : [];
};
