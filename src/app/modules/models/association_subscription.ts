import { AssociationModel } from './association'
import { UserModel } from './user'

export class AssociationSubscriptionModel {
  id: number;
  user: UserModel;
  association_subscribed: AssociationModel;
}
