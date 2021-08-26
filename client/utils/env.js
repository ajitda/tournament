class Env {
    // any new env vars should be added and accessed through here
    DISCORD_CLIENT_ID

    DISCORD_CLIENT_SECRET

    constructor() {
        Object.getOwnPropertyNames(this).forEach((key) => {
            const properties = {};
            const val = process.env[key];
            if (!val) {
                const err = new Error(
                    `PROCESS IS MISSING ENVIRONMENT VARIABLE:${key}`
                );
                throw err;
            }
            properties[key] = val;

            Object.assign(this, properties);
        });
    }
}
export default new Env();
