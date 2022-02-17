declare const SkyotLoggerPino: import("pino").Logger<{
    level: string;
    transport: {
        target: string;
        options: {
            colorize: boolean;
        };
    };
}>;
declare function logger(message: any | any[]): void;
export { SkyotLoggerPino, logger };
