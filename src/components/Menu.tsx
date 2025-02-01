import { Menubar } from "primereact/menubar";
import { MenuItem, MenuItemOptions } from "primereact/menuitem";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../routes/RouteConfig";
import { Button } from "primereact/button";
import { LocalStorageDataApi } from "../api/implementations/LocalStorageDataApi";
import { Constants } from "../constant/Constant";
import { useToast } from "../hooks/useToast";
import { Toast } from "primereact/toast";

export default function Menu() {
  const { toast, showToast } = useToast();
  const keyDataScenario = Constants.KEY_DATA_SCENARIO;
  const keyDataFunction = Constants.KEY_DATA_FUNCTION;
  const dataApi = new LocalStorageDataApi();
  const navigate = useNavigate();

  const itemRenderer = (item: MenuItem, options: MenuItemOptions) => (
    <NavLink to={item.url || "#"} className={options.className}>
      <i className={item.icon}></i>
      {item.label}
    </NavLink>
  );

  const items: MenuItem[] = routes.map((route) => ({
    label: route.label,
    icon: route.icon,
    url: route.url,
    template: itemRenderer,
    command: route.command,
  }));

  const deleteData = () => {
    try {
      dataApi.deleteData(keyDataScenario);
      dataApi.deleteData(keyDataFunction);
      navigate("/");
      showToast("success", "Aviso", "Datos eliminados correctamente");
    } catch {
      showToast("error", "Error", "Error eliminando datos");
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <Menubar
        start={
          <NavLink to={"/"} className="no-underline">
            <h3
              style={{
                color: "var(--text-color)",
              }}
            >
              Escenarios y Guiones
            </h3>
          </NavLink>
        }
        model={items}
        end={
          <Button
            severity="danger"
            onClick={deleteData}
            tooltip="Eliminar datos guardados"
            tooltipOptions={{ position: "left" }}
            icon="pi pi-trash"
            rounded
          />
        }
      />
    </>
  );
}
