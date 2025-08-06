import { LocalStorageDataApi } from "../api/implementations/LocalStorageDataApi";
import Welcome from "../components/Welcome";
import { Constants } from "../constant/Constant";
import ViewAuxiliaryFunction from "../views/ViewAuxiliaryFunction";
import ViewCreteAuxiliaryFunction from "../views/ViewCreateAuxiliaryFunction";
import ViewCreateScenario from "../views/ViewCreateScenario";
import ViewScenario from "../views/ViewScenario";

const dataApi = new LocalStorageDataApi();
const keyDataScenario = Constants.KEY_DATA_SCENARIO;
const keyDataFunction = Constants.KEY_DATA_FUNCTION;

export const routes = [
  {
    label: "Crear escenario",
    icon: "pi pi-file-plus mr-2",
    url: "/create-scenario",
    element: <ViewCreateScenario />,
  },
  {
    label: "Crear Función Auxiliar",
    icon: "pi pi-file-plus mr-2",
    url: "/view-create-auxiliary-function",
    element: <ViewCreteAuxiliaryFunction />,
  },
  {
    label: "Ver escenario",
    icon: "pi pi-eye mr-2",
    url: "/view-scenario",
    element: <ViewScenario />,
  },
  {
    label: "Ver función auxiliar",
    icon: "pi pi-eye mr-2",
    url: "/view-auxiliary-function",
    element: <ViewAuxiliaryFunction />,
  },
  {
    label: "Exportar escenarios",
    icon: "pi pi-file-export mr-2",
    command: () => {
      dataApi.exportData(keyDataScenario, keyDataScenario);
      dataApi.exportData(keyDataFunction, keyDataFunction);
    },
  },
  {
    label: "Exportar en texto plano",
    icon: "pi pi-file-word mr-2",
    command: () => {
      dataApi.exportDataPlainText(keyDataScenario, keyDataScenario);
      dataApi.exportDataPlainText(keyDataFunction, keyDataFunction);
    },
  },
  { url: "/", element: <Welcome /> },
];
