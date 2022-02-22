import { Group } from '../tab1/group';

export class FeedPost {

  constructor(
    public images: string[],
    public group: Group,
    public date: string
  ) {}

}
