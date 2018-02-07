import { UserModel } from './user';
export declare class DiscussionMessageModel {
    id: number;
    user: UserModel;
    message: string;
    from_townhall: boolean;
    created_at: Date;
    updated_at: Date;
}
