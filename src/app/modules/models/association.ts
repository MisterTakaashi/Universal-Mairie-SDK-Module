import { UserModel } from './user'
import { DirectoryCategoryModel } from './directory_category'

export class AssociationModel {
  id: number;
  name: string;
  description: string;
  logo: string;
  directory_category_id: number;
  directory_category: DirectoryCategoryModel;
  validated: boolean;
  user: UserModel;
  token: string;
  topic_created_at?: Date;
  created_at: Date;
}
