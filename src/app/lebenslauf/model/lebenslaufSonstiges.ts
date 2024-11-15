/**
 * Weitere Angaben im Lebenslauf, abseits der wesentlichen Informationen zu Bildungs- und Karriereweg
 */
export interface LebenslaufSonstiges {
  /**
   * Auflistung weiterer Punkte mit vorangestelltem Haken
   */
  weitereBoni: ReadonlyArray<string>;
  /**
   * Auflistung von Interessen und Hobbys
   */
  hobbys: ReadonlyArray<string>;
}
