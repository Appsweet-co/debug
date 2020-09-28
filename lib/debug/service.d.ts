export declare type DebugType = 'all' | 'log' | 'warn' | 'error';
export interface DebugConfig {
    prefix?: string | null;
    disabled?: DebugType[];
    meta?: boolean;
}
export declare const defaults: DebugConfig;
export declare const maybeDisabled: (val: DebugType[]) => any;
export declare const maybeMeta: (active: boolean) => any;
export declare const maybePrefix: (prefix: string) => any;
export declare const deactivate: (list: DebugType[]) => (kind: DebugType) => boolean;
export declare const format: (prefix: string | null | undefined) => (...context: any) => any[];
export declare const meta: (active: boolean | undefined) => (kind: DebugType) => string[];
