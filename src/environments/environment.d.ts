export { }

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
        }
    }
    interface Environment {
        production: boolean;
        firebase: {
            apiKey: string;
            authDomain: string;
            projectId: string;
            storageBucket: string;
            messagingSenderId: string;
            appId: string;
        };
    }

    const environment: Environment;
}
