import { DirectoryCategoryModel } from './directory_category';
export declare class ShopModel {
    id: number;
    name: string;
    description: string;
    logo: string;
    directory_category?: DirectoryCategoryModel;
    directory_category_id: number;
    schedule: string;
    place_id?: string;
    validated: boolean;
}
