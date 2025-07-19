export interface LebenslaufStationKarriere {
  arbeitgeber: string;
  jobtitel: string;
  zeitraum: `seit ${string}` | `${string}–${string}`;
  taetigkeiten: ReadonlyArray<string>;
}
