import { errorReporter } from "./error_report";

export function get_env(name: string): string {
    return process.env[name] || (() => {
        errorReporter(new Error(`Unable to get env [${name}]`));
        return "";
    })();
}