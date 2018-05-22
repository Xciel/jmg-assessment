import { ItemInterface } from '../../interfaces/itemInterface';
import { ImageInterface } from '../../interfaces/imageInterface';

export class Feed {
  description: string;
  image: ImageInterface;
  item: ItemInterface;
  link: string;
  title: string;

  constructor(args) {
      Object.assign(this, args);
  }
}
