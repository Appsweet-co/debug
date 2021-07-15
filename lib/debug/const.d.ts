export declare type DebugType = 'all' | 'log' | 'warn' | 'error';
export interface DebugConfig {
    prefix?: string | null;
    disabled?: DebugType[];
    meta?: boolean;
}
export declare const defaults: DebugConfig;
