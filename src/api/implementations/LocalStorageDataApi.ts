import { Constants } from "../../constant/Constant";
import { AuxiliaryFunction } from "../../interface/datasaved/AuxiliaryFunction";
import { Scenario } from "../../interface/datasaved/Scenario";
import { IDataApi } from "../interface/IDataApi";
import { v4 as uuid } from "uuid";

const keyDataScenario = Constants.KEY_DATA_SCENARIO;
const keyDataFunction = Constants.KEY_DATA_FUNCTION;

export class LocalStorageDataApi implements IDataApi<string, Scenario | AuxiliaryFunction> {
  private generateId(): string {
    return uuid();
  }

  private downloadData(data: object, filename: string): void {
    if (data) {
      const jsonData = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      throw "No se encontraron datos para exportar.";
    }
  }

  private deleteItem(id: string, key: typeof keyDataScenario | typeof keyDataFunction): void {
    try {
      const data = this.getData(key) as (Scenario | AuxiliaryFunction)[];
      const updatedData = data.filter((item) => item.id !== id);
      const jsonData = JSON.stringify(updatedData);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      console.error(`Error eliminando ${id}:`, error);
      throw error;
    }
  }

  saveData(key: string, newData: Scenario | AuxiliaryFunction): void {
    try {
      newData.id = this.generateId();
      const existingData = this.getData(key) || [];
      const dataWithId = { ...newData };
      const combinedData = [...existingData, dataWithId];
      const jsonData = JSON.stringify(combinedData);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      console.error("Error guardando datos en localStorage:", error);
      throw error;
    }
  }

  getData(key: string): (Scenario | AuxiliaryFunction)[] {
    try {
      const jsonData = localStorage.getItem(key);
      if (jsonData) return JSON.parse(jsonData) as (Scenario | AuxiliaryFunction)[];
      return [];
    } catch (error) {
      console.error("Error obteniendo datos de localStorage:", error);
      return [];
    }
  }

  exportData(key: string, filename: string): void {
    try {
      const data = this.getData(key);
      this.downloadData(data, filename);
    } catch (error) {
      console.error("Error exportando datos de localStorage:", error);
      throw error;
    }
  }

  exportDataActual(dataSaved: Scenario | AuxiliaryFunction): void {
    try {
      this.downloadData(dataSaved, dataSaved.name);
    } catch (error) {
      console.error("Error exportando datos actuales:", error);
      throw error;
    }
  }

  deleteData(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error eliminando datos de localStorage:", error);
      throw error;
    }
  }

  deleteScenario(key: string): void {
    this.deleteItem(key, keyDataScenario);
  }

  deleteFunction(key: string): void {
    this.deleteItem(key, keyDataFunction);
  }
}
