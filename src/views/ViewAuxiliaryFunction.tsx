import { useEffect, useState } from "react";
import { AuxiliaryFunction } from "../interface/datasaved/AuxiliaryFunction";
import { Constants } from "../constant/Constant";
import { LocalStorageDataApi } from "../api/implementations/LocalStorageDataApi";
import { useToast } from "../hooks/useToast";
import { Toast } from "primereact/toast";
import ViewData from "../components/ViewData";

export default function ViewAuxiliaryFunction() {
  const [dataSaved, setDataSaved] = useState<AuxiliaryFunction[]>([]);
  const keyDataFunction = Constants.KEY_DATA_FUNCTION;
  const dataApi = new LocalStorageDataApi();
  const { toast, showToast } = useToast();

  useEffect(() => {
    setDataSaved(dataApi.getData(keyDataFunction) as AuxiliaryFunction[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteAuxiliarFunction = (id: string) => {
    try {
      dataApi.deleteFunction(id);
      setDataSaved(dataApi.getData(keyDataFunction) as AuxiliaryFunction[]);
      showToast("success", "Aviso", "Función eliminada correctamente");
    } catch {
      showToast("error", "Error", "Error eliminando función");
    }
  };

  return (
    <>
      <section className="col-12 text-center">
        <h2>Funciones</h2>
      </section>
      <Toast ref={toast} />
      <ViewData
        dataSaved={dataSaved}
        deleteFunction={deleteAuxiliarFunction}
        tooltip={"Eliminar función"}
        emptyMessage={"No existen parámetros"}
      />
    </>
  );
}
