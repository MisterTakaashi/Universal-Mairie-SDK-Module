import { AssociationModel } from './association'

export class AssociationAnnounceModel {
  id: number;
  title: string;
  content: string;
  association_creator: AssociationModel;
  validated: boolean;
  notification: boolean;
}
