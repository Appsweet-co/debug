import { DebugType } from './const';
export declare const maybeDisabled: (val: DebugType[]) => DebugType[];
export declare const maybeMeta: (active: boolean) => boolean;
export declare const maybePrefix: (prefix: string) => string;
export declare const deactivate: (list: DebugType[]) => (kind: DebugType) => boolean;
export declare const format: (prefix: string | null | undefined) => (...context: any) => any[];
export declare const meta: (active: boolean | undefined) => (kind: DebugType) => string[];
