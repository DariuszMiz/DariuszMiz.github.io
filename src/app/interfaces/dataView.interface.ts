import { TypeModel } from './type.interface';
import { ImageModel } from './img.interface';
export interface DataViewModel {
  files: ImageModel[];
  types: TypeModel[];
}
