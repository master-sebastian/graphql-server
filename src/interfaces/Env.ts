export default interface Env{
    port: string|number,
    database: {
        type: string,
        connection: {
        host: string,
        port: string|number,
        database: string,
        user: string,
        password: string,
        }
    }
}