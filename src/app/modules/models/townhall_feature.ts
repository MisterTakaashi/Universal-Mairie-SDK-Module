import { TownhallModel } from './townhall';

export class TownhallFeatureModel {
  id: number;
  townhall: TownhallModel;
  informations: boolean;
  associations: boolean;
  shops: boolean;
  reports: boolean;
  discussions: boolean;
}
