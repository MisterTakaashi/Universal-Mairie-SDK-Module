import { UserModel } from './user';
import { DiscussionMessageModel } from './discussion_message';
export declare class DiscussionModel {
    id: number;
    title: string;
    user: UserModel;
    closed: boolean;
    last_message_from_townhall: boolean;
    last_message_created_at: Date;
    messages?: DiscussionMessageModel[];
    created_at: Date;
}
