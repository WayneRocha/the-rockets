export function get_env(name: string){
    return process.env[name] || (
        () => {
            return "";
        }
    );
}