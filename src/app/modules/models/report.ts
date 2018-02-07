import { DiscussionModel } from './discussion';

export class ReportModel {
  id: number;
  image: string;
  street: string;
  coordinates: string;
  discussion: DiscussionModel;
}
