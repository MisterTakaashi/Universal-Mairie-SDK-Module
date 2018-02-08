import { ModuleWithProviders } from '@angular/core';
export declare class UniversalMairieSdkModule {
    static UNIVERSAL_CONFIG: {
        API_URL: string;
        FIREBASE_API_KEY: string;
        FIREBASE_AUTH_DOMAIN: string;
        FIREBASE_DATABASE_URL: string;
        FIREBASE_STORAGE_BUCKET: string;
    };
    static forRoot(ENV: any): ModuleWithProviders;
}
