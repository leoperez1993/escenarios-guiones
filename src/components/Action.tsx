import { Button } from "primereact/button";
import { ButtonGroup } from "primereact/buttongroup";
import { Scenario } from "../interface/datasaved/Scenario";
import { useToast } from "../hooks/useToast";
import { Toast } from "primereact/toast";
import { LocalStorageDataApi } from "../api/implementations/LocalStorageDataApi";
import { Constants } from "../constant/Constant";
import { AuxiliaryFunction } from "../interface/datasaved/AuxiliaryFunction";

export default function Action({ dataSaved }: { dataSaved: Scenario | AuxiliaryFunction }) {
  const { toast, showToast } = useToast();
  const keyDataScenario = Constants.KEY_DATA_SCENARIO;
  const keyDataFunction = Constants.KEY_DATA_FUNCTION;
  const dataApi = new LocalStorageDataApi();

  const handleSave = () => {
    try {
      const key = "precondition" in dataSaved ? keyDataScenario : keyDataFunction;
      dataApi.saveData(key, dataSaved);
      showToast("success", "Correcto", "Datos guardados correctamente");
    } catch {
      showToast("error", "Error", "Error guardando datos");
    }
  };

  const handleExport = () => {
    try {
      dataApi.exportDataActual(dataSaved);
      showToast("success", "Correcto", "Datos exportados correctamente");
    } catch {
      showToast("success", "Correcto", "Error exportando datos");
    }
  };

  return (
    <div className="card flex justify-content-center">
      <ButtonGroup>
        <Button onClick={handleSave} tooltip="Guardar" tooltipOptions={{ position: "left" }} icon="pi pi-save" />
        <Button onClick={handleExport} tooltip="Exportar" tooltipOptions={{ position: "right" }} icon="pi pi-file-export" />
      </ButtonGroup>
      <Toast ref={toast} />
    </div>
  );
}
