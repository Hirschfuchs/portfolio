import { ImageQuelle } from './image-quelle';

export interface PortfolioImage {
  src: string;
  alt: string;
  beschreibungstext?: string;

  quelle: ImageQuelle;

  width: number;
  height: number;

  stil?: string;
}
