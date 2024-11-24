export enum LebenslaufZertifikatTyp {
  WEITERBILDUNG,
  ZERTIFIKAT,
}

export interface LebenslaufZertifikat {
  typ: LebenslaufZertifikatTyp;
  name: string;
  schwerpunkte?: ReadonlyArray<string>;
}

export const lebenslaufZertifikatTypToString = (
  typ: LebenslaufZertifikatTyp,
) => {
  switch (typ) {
    case LebenslaufZertifikatTyp.WEITERBILDUNG:
      return 'Weiterbildung';
    case LebenslaufZertifikatTyp.ZERTIFIKAT:
      return 'Zertifikat';
  }
};
