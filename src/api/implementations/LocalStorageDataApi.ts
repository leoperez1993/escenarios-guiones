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

  private downloadData(data: object | string, filename: string, typeFile: "json" | "txt"): void {
    const json = "application/json";
    const txt = "text/plain";

    console.log("Estoy en download:", data);

    if (data) {
      const jsonData = JSON.stringify(data, null, 2);
      const blob = new Blob([typeFile === "json" ? jsonData : String(data)], { type: typeFile === "json" ? json : txt });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.${typeFile}`;
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

  private createTxtFile = (data: (Scenario | AuxiliaryFunction)[]): string => {
    let fileContent = "";

    const isFunctionArray = (data as AuxiliaryFunction[])[0]?.params !== undefined;

    data.forEach((item, index) => {
      fileContent += `Nombre: ${item.name || "Sin nombre"}\n`;
      fileContent += `Descripción: ${item.description || "Sin descripción"}\n`;

      if (isFunctionArray) {
        const functionItem = item as AuxiliaryFunction;
        if (functionItem.params && functionItem.params.length > 0) {
          fileContent += `Parámetros: ${functionItem.params.join(", ")}\n`;
        }
      } else {
        const scenarioItem = item as Scenario;
        if (scenarioItem.precondition && scenarioItem.precondition.length > 0) {
          fileContent += `Precondiciones: ${scenarioItem.precondition.join(", ")}\n`;
        }
      }

      fileContent += "Pasos:\n";
      item.steps.forEach((step) => {
        fileContent += `  - Paso ${step.id}: ${step.step}\n`;
        fileContent += `    Resultado: ${step.result}\n`;
      });

      if (index < data.length - 1) {
        fileContent += "\n--------------------\n\n";
      }
    });

    return fileContent;
  };

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
      this.downloadData(data, filename, "json");
    } catch (error) {
      console.error("Error exportando datos de localStorage:", error);
      throw error;
    }
  }

  exportDataPlainText(key: string, filename: string): void {
    try {
      const data = this.getData(key);
      const fileContent = this.createTxtFile(data);
      this.downloadData(fileContent, filename, "txt");
    } catch (error) {
      console.error("Error exportando datos de localStorage:", error);
      throw error;
    }
  }

  exportDataActual(dataSaved: Scenario | AuxiliaryFunction): void {
    try {
      this.downloadData(dataSaved, dataSaved.name, "json");
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
