/**
 * Interfaz que representa una API de datos con tipos genéricos de clave y datos.
 *
 * @template K - El tipo de la clave utilizada para identificar los datos.
 * @template T - El tipo de los datos que se están gestionando.
 */
export interface IDataApi<K, T> {
  /**
   * Guarda nuevos datos asociados con una clave dada.
   *
   * @param key - La clave para asociar con los nuevos datos.
   * @param newData - Los nuevos datos que se guardarán.
   * @throws Error si ocurre un problema al guardar los datos.
   */
  saveData(key: K, newData: T): void;

  /**
   * Recupera los datos asociados con una clave dada.
   *
   * @param key - La clave cuyos datos asociados se recuperarán.
   * @returns Un array de datos asociados con la clave, o un array vacío si no se encuentran datos.
   */
  getData(key: K): T[] | [];

  /**
   * Exporta los datos asociados con una clave dada a un archivo.
   *
   * @param key - La clave cuyos datos asociados se exportarán.
   * @param filename - El nombre del archivo al que se exportarán los datos.
   * @throws Error si ocurre un problema al exportar los datos.
  
   */
  exportData(key: K, filename: string): void;

  /**
   * Exporta los datos en texto plano asociados con una clave dada a un archivo.
   *
   * @param key - La clave cuyos datos asociados se exportarán.
   * @param filename - El nombre del archivo al que se exportarán los datos.
   * @throws Error si ocurre un problema al exportar los datos.
  
   */
  exportDataPlainText(key: K, filename: string): void;

  /**
   * Exporta los datos actualmente guardados.
   *
   * @param dataSaved - Los datos que se exportarán.
   * @throws Error si ocurre un problema al exportar los datos.
   */
  exportDataActual(dataSaved: T): void;

  /**
   * Elimina los datos asociados con una clave dada.
   *
   * @param key - La clave cuyos datos asociados se eliminarán.
   * @throws Error si ocurre un problema al eliminar los datos.
   */
  deleteData(key: string): void;

  /**
   * Elimina un escenario asociado con una clave dada.
   *
   * @param key - La clave del escenario a eliminar.
   * @throws Error si ocurre un problema al eliminar el escenario.
   */
  deleteScenario(key: string): void;

  /**
   * Elimina una función auxiliar asociada con una clave dada.
   *
   * @param key - La clave de la función auxiliar a eliminar.
   * @throws Error si ocurre un problema al eliminar la función auxiliar.
   */
  deleteFunction(key: string): void;
}
