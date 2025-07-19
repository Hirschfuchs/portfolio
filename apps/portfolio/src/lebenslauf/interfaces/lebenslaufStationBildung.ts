/**
 * Abstraktion einer Station auf dem Bildungsweg, wie einem Studium
 */
export interface LebenslaufStationBildung {
  /**
   * Beschreibung der Station an sich, d.h. der Einrichtung und der dort erhaltenen Ausbildung
   */
  station: {
    /**
     * Name der Bildungseinrichtung, bei der der Abschluss erzielt wurde
     */
    bildungseinrichtung: string;
    /**
     * Freitextbeschreibung der Bildungsstation
     */
    beschreibung: string;
  };
  /**
   * Beschreibung des erreichten oder angestrebten Bildungsabschlusses
   */
  abschluss:
    | {
        abgeschlossen: true;
        /**
         * Erzielter Abschluss dieser Bildungsstation, beispielsweise Bachelor of Science
         */
        abschlusstitel: string;
        /**
         * Durch Abschluss errungener Titel, beispielsweise B.Sc.
         */
        titel?: string;
        /**
         * Zeitraum der Fortbildung zum Erreichen des Abschlusses
         */
        zeitraum: `${string}–${string}`;
        abschlussnote: string;
      }
    | {
        abgeschlossen: false;
        /**
         * Zu erzielender Abschluss dieser Bildungsstation, beispielsweise Bachelor of Science
         */
        abschlusstitel: string;
        /**
         * Zeitraum der Fortbildung zum Erreichen des Abschlusses
         */
        zeitraum: `seit ${string}`;
        bisherigeDurchschnittsnote: string;
      };
}
