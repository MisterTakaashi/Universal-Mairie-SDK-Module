import { AssociationModel } from './association';
export declare class AssociationAnnounceModel {
    id: number;
    title: string;
    content: string;
    association_creator: AssociationModel;
    notification: boolean;
}
