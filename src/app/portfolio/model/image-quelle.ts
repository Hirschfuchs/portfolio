export interface ImageQuelle {
  quelleName: string;
  url?: string;
  autor?: string;
}

export const generateQuelleText = (quelle: ImageQuelle) => {
  let result = `Bild von ${quelle.quelleName}`;

  if (quelle.autor !== undefined) {
    result += ` (Autor: ${quelle.autor})`;
  }

  return result;
};
