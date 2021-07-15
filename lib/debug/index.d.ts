import { DebugConfig } from './const';
export declare const Debug: (config: DebugConfig) => {
    log: (...context: any[]) => void;
    warn: (...context: any[]) => void;
    error: (...context: any[]) => void;
};
