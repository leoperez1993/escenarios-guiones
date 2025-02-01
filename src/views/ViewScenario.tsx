import { useState, useEffect } from "react";
import { Scenario } from "../interface/datasaved/Scenario";
import { LocalStorageDataApi } from "../api/implementations/LocalStorageDataApi";
import { Constants } from "../constant/Constant";
import { useToast } from "../hooks/useToast";
import { Toast } from "primereact/toast";
import ViewData from "../components/ViewData";

export default function ViewScenario() {
  const [dataSaved, setDataSaved] = useState<Scenario[]>([]);
  const keyDataScenario = Constants.KEY_DATA_SCENARIO;
  const dataApi = new LocalStorageDataApi();
  const { toast, showToast } = useToast();

  useEffect(() => {
    setDataSaved(dataApi.getData(keyDataScenario) as Scenario[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteScenario = (id: string) => {
    try {
      dataApi.deleteScenario(id);
      setDataSaved(dataApi.getData(keyDataScenario) as Scenario[]);
      showToast("success", "Aviso", "Escenario eliminado correctamente");
    } catch {
      showToast("error", "Error", "Error eliminando escenario");
    }
  };

  return (
    <>
      <section className="col-12 text-center">
        <h2>Escenarios</h2>
      </section>
      <Toast ref={toast} />
      <ViewData
        dataSaved={dataSaved}
        deleteFunction={deleteScenario}
        tooltip={"Eliminar escenario"}
        emptyMessage={"No existe precondiciones"}
      />
    </>
  );
}
