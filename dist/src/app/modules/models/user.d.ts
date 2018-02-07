import { TownhallModel } from './townhall';
export declare class UserModel {
    id: number;
    email: string;
    password?: string;
    last_sign_in_at: Date;
    last_sign_in_ip: string;
    csr: string;
    uuid: string;
    firebase_token: string;
    platform?: string;
    user_townhalls: {
        id: number;
        townhall_id?: number;
        townhall?: TownhallModel;
        rank: number;
    }[];
}
export declare enum RANKS {
    COMM_ADMIN = 90,
    ADMIN = 80,
    ASSOCIATION_MANAGER = 60,
}
