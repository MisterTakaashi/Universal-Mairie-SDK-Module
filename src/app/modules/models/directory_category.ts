export class DirectoryCategoryModel {
  id: number;
  name: string;
  under_categories: DirectoryCategoryModel[];
}
