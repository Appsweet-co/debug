import { Maybe } from 'true-myth/maybe';
import { defaults } from './const';
export const maybeDisabled = (val) => Maybe.of(val).unwrapOr(defaults.disabled);
export const maybeMeta = (active) => Maybe.of(active).unwrapOr(defaults.meta);
export const maybePrefix = (prefix) => Maybe.of(prefix).unwrapOr(defaults.prefix);
export const deactivate = (list) => {
    return (kind) => list.includes('all') || list.includes(kind);
};
export const format = (prefix) => {
    return (...context) => (prefix) ? [`[${prefix}]`, ...context] : [...context];
};
export const meta = (active) => {
    return (kind) => (active) ? [`==> [${kind.toUpperCase()}]`] : [];
};
